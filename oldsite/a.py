import json
import requests
import os
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

# List of JSON files
json_files = ["kh7.json", "kh8.json", "rb7.json", "rb8.json", "t7.json", "t8.json", "bg7.json", "bg8.json"]

# Token endpoint & refresh token (replace with valid one)
TOKEN_URL = "https://auth.42.fr/auth/realms/students-42/protocol/openid-connect/token"
REFRESH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyMGFlMjM0My1lZmM2LTQ2M2QtOGU2MC04ODE0ZDIxZGVlNTgifQ.eyJleHAiOjE3NTc1OTY5NjUsImlhdCI6MTc1NzUxMDU2NSwianRpIjoiYjMyYzI2NzEtMjIzYy00ZGQ3LWIxMDgtZDg4NzkwMmVlNDdhIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLjQyLmZyL2F1dGgvcmVhbG1zL3N0dWRlbnRzLTQyIiwiYXVkIjoiaHR0cHM6Ly9hdXRoLjQyLmZyL2F1dGgvcmVhbG1zL3N0dWRlbnRzLTQyIiwic3ViIjoiYzBjYjBjZWItYmU4Mi00ZDBhLThhNDAtM2Y1YWVhMmE1ZDI5IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImZyb250ZW5kLXJlYWN0Iiwic2Vzc2lvbl9zdGF0ZSI6Ijk4ZThkZTNlLTFlNzAtNDcyNS1hMjg3LTgyZjkxNTE3ZTFkMCIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI5OGU4ZGUzZS0xZTcwLTQ3MjUtYTI4Ny04MmY5MTUxN2UxZDAifQ.kgmo6CVqSU_DF-dKYZ5sx2259PLEJNOLr_3xV-AunbA"

# Global headers (will update access_token dynamically)
headers = {
    "accept": "*/*",
    "authorization": "Bearer YOUR_INITIAL_ACCESS_TOKEN",
    "content-type": "application/json"
}

# Lock for thread-safe token refresh
token_lock = Lock()


def refresh_access_token():
    """Refresh the access token using the stored REFRESH_TOKEN."""
    with token_lock:
        print("[DEBUG] Refreshing access token...")

        payload = {
            "grant_type": "refresh_token",
            "refresh_token": REFRESH_TOKEN,
            "scope": "openid profile email",
            "client_id": "frontend-react"
        }

        response = requests.post(
            TOKEN_URL,
            headers={"content-type": "application/x-www-form-urlencoded", "accept": "application/json"},
            data=payload
        )

        if response.status_code != 200:
            print(f"[DEBUG] Failed to refresh token, status {response.status_code}, body: {response.text}")
            return None

        token_data = response.json()
        new_token = token_data.get("access_token")
        if new_token:
            headers["authorization"] = f"Bearer {new_token}"
            print("[DEBUG] Access token refreshed successfully.")
            return new_token
        else:
            print("[DEBUG] No access_token in response.")
            return None


def fetch_user_data(user):
    """Fetch user data and update with 'accepted' field."""
    login = user.get("login")
    if not login:
        print("[DEBUG] User has no login, skipping...")
        user["accepted"] = "no"
        return user

    url = f"https://intrapy.intra.42.fr/api/v1/users/{login}"
    print(f"[DEBUG] Fetching data for login: {login}")

    response = requests.get(url, headers=headers)
    print(f"[DEBUG] Status code for {login}: {response.status_code}")

    if response.status_code == 401:
        print(f"[DEBUG] Got 401 for {login}, trying to refresh token...")
        if refresh_access_token():
            response = requests.get(url, headers=headers)
            print(f"[DEBUG] Retry status code for {login}: {response.status_code}")

    if response.status_code == 200:
        res_json = response.json()
        print(f"[DEBUG] Response for {login}: {res_json}")
        user["accepted"] = "yes" if res_json.get("close") is None else "no"
        print(f"[DEBUG] {login} accepted: {user['accepted']}")
    else:
        print(f"[DEBUG] Failed to fetch {login}, marking accepted as 'no'")
        user["accepted"] = "no"

    return user


for file_name in json_files:
    if not os.path.exists(file_name):
        print(f"[DEBUG] {file_name} does not exist, skipping...")
        continue

    print(f"[DEBUG] Processing file: {file_name}")
    with open(file_name, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Use threads for speed
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(fetch_user_data, user) for user in data]
        updated_users = [future.result() for future in as_completed(futures)]

    # Save back the updated JSON
    with open(file_name, "w", encoding="utf-8") as f:
        json.dump(updated_users, f, indent=4)

    print(f"[DEBUG] Updated {file_name}\n")
