import json
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock
import os

json_files = ["kh7.json", "kh8.json", "rb7.json", "rb8.json", "t7.json", "t8.json", "bg7.json", "bg8.json"]

# Global headers with placeholder token
headers = {
    "accept": "*/*",
    "authorization": "Bearer YOUR_ACCESS_TOKEN",
    "content-type": "application/json"
}

# Lock for safely updating the token across threads
token_lock = Lock()

refresh_token_data = {
    "grant_type": "refresh_token",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyMGFlMjM0My1lZmM2LTQ2M2QtOGU2MC04ODE0ZDIxZGVlNTgifQ.eyJleHAiOjE3NTc2MDE0NjksImlhdCI6MTc1NzUxNTA2OSwianRpIjoiZThmYzRhZjItN2UwNy00ZDUzLWI4NWMtMTI5NDQzZWFmMTFlIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLjQyLmZyL2F1dGgvcmVhbG1zL3N0dWRlbnRzLTQyIiwiYXVkIjoiaHR0cHM6Ly9hdXRoLjQyLmZyL2F1dGgvcmVhbG1zL3N0dWRlbnRzLTQyIiwic3ViIjoiYzBjYjBjZWItYmU4Mi00ZDBhLThhNDAtM2Y1YWVhMmE1ZDI5IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImZyb250ZW5kLXJlYWN0Iiwic2Vzc2lvbl9zdGF0ZSI6Ijk4ZThkZTNlLTFlNzAtNDcyNS1hMjg3LTgyZjkxNTE3ZTFkMCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI5OGU4ZGUzZS0xZTcwLTQ3MjUtYTI4Ny04MmY5MTUxN2UxZDAifQ.Xzf6l6bEz1cWb4UJ6YpG2lNtfT2n6I9fUcAzD6PCds4",
    "scope": "openid profile email",
    "client_id": "frontend-react"
}

def refresh_access_token():
    url = "https://auth.42.fr/auth/realms/students-42/protocol/openid-connect/token"
    global headers
    with token_lock:
        print("[DEBUG] Refreshing access token...")
        response = requests.post(url, data=refresh_token_data)
        if response.status_code == 200:
            token_info = response.json()
            headers["authorization"] = f"Bearer {token_info['access_token']}"
            refresh_token_data["refresh_token"] = token_info["refresh_token"]
            print("[DEBUG] Token refreshed successfully")
        else:
            print(f"[DEBUG] Failed to refresh token: {response.status_code}")

def fetch_projects(user):
    login = user.get("login")
    if not login:
        user["isvalidated"] = "didnt pass"
        user["cheating"] = False
        return user

    url = f"https://intrapy.intra.42.fr/api/v1/users/{login}/projects/marked?cursus_id=9"
    print(f"[DEBUG] Fetching projects for {login}")

    response = requests.get(url, headers=headers)

    # Refresh token if 401
    if response.status_code == 401:
        refresh_access_token()
        response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"[DEBUG] Failed to fetch projects for {login}: {response.status_code}")
        user["isvalidated"] = "didnt pass"
        user["cheating"] = False
        return user

    try:
        projects = response.json()
        final_exam = None
        for project in projects:
            if isinstance(project, dict) and "Exam" in project.get("project_name", "") and "Final" in project.get("project_name", ""):
                final_exam = project
                break

        # Determine isvalidated
        if final_exam is None:
            user["isvalidated"] = "didnt pass"
        else:
            user["isvalidated"] = "yes" if final_exam.get("is_validated") else "no"

        # Determine cheating
        if final_exam and final_exam.get("final_mark") == -42:
            user["cheating"] = True
        else:
            user["cheating"] = False

        print(f"[DEBUG] {login} -> isvalidated: {user['isvalidated']}, cheating: {user['cheating']}")

    except Exception as e:
        print(f"[DEBUG] Error parsing projects for {login}: {e}")
        user["isvalidated"] = "didnt pass"
        user["cheating"] = False

    return user


for file_name in json_files:
    if not os.path.exists(file_name):
        print(f"[DEBUG] {file_name} does not exist, skipping...")
        continue

    print(f"[DEBUG] Processing file: {file_name}")
    with open(file_name, "r", encoding="utf-8") as f:
        data = json.load(f)

    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(fetch_projects, user) for user in data]
        updated_users = [future.result() for future in as_completed(futures)]

    with open(file_name, "w", encoding="utf-8") as f:
        json.dump(updated_users, f, indent=4)

    print(f"[DEBUG] Updated {file_name}\n")
