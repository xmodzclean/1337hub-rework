import requests
import json

url = "https://intrapy.intra.42.fr/api/v1/users/anaalazh/projects/marked?cursus_id=9"

headers = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,fr;q=0.8",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICItNDhFdTBpMDZYU1BrMHpRMlZaZGFQdE9qS3JWZW5lYzRXeTFNdEplOGlVIn0.eyJleHAiOjE3NTc1MTQ2NjEsImlhdCI6MTc1NzUxNDM2MSwiYXV0aF90aW1lIjoxNzU3NDk4MjQ4LCJqdGkiOiJjNWRlNjNmOS1jZjA4LTQ0ZTgtOGVlMS05YWRlNDJjMmZlY2EiLCJpc3MiOiJodHRwczovL2F1dGguNDIuZnIvYXV0aC9yZWFsbXMvc3R1ZGVudHMtNDIiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYzBjYjBjZWItYmU4Mi00ZDBhLThhNDAtM2Y1YWVhMmE1ZDI5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZnJvbnRlbmQtcmVhY3QiLCJzZXNzaW9uX3N0YXRlIjoiOThlOGRlM2UtMWU3MC00NzI1LWEyODctODJmOTE1MTdlMWQwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vcHJvZmlsZS12My5pbnRyYS40Mi5mciIsImh0dHBzOi8vd2VsY29tZS5pbnRyYS40Mi5mciIsImh0dHBzOi8vZm9ybXMuNDIuZnIiLCJodHRwczovL2ZyZWV6ZS40Mi5mciIsImh0dHBzOi8vcGFjZS1zeXN0ZW0uNDIuZnIiLCJodHRwczovL3Byb2ZpbGUuaW50cmEuNDIuZnIiLCJodHRwczovL2djYy40Mi5mciIsImh0dHBzOi8vY2ZhLjQyLmZyIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtc3R1ZGVudHMtNDIiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsInNpZCI6Ijk4ZThkZTNlLTFlNzAtNDcyNS1hMjg3LTgyZjkxNTE3ZTFkMCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJ1c2VyX2lkIjoxOTQ3MDMsIm5hbWUiOiJBYmRlbGthcmltIFpha2kiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhemFraSIsImdpdmVuX25hbWUiOiJBYmRlbGthcmltIiwiZmFtaWx5X25hbWUiOiJaYWtpIiwiZW1haWwiOiJhemFraUBzdHVkZW50LjEzMzcubWEifQ.md8Aebsq2AVfkbA0Ed8cVfozOKEqsBkesPESpOUGPF5xRJU3gie_CiKZqNOzDFuxTvHL-3iuyR_A7DpDUZdWhhoW-h7uB9sQtxLrvDp_7VxxnAGT2xhea53r5tBLqYpZE1G6Tx_AuVLPwP9I7-E90IoFJRoEJEccUYSIZULxp5I2LBsiOnKgJGjQk0FodNtLLhjrhgchKBik4BH2o6MawH3aV3BZZkiryjEFe6wEBcOupsUwT7auNd9lN80z63-iRASNiJslpIaRlIm8ELos5ZlJ57n31LGKWS4nPrtFU9g6GJ45FbdWJUJGNiiy0WcohDPGA-ZX7_635xGVVcLWIA",
    "content-type": "application/json",
}

response = requests.get(url, headers=headers)

# Debug prints
print("Status code:", response.status_code)
print("Response type:", type(response.json()))
print("Response content:", json.dumps(response.json(), indent=2))  # pretty print

# Once we know the structure, we can safely loop
projects = response.json()

# If it's a list, this works
if isinstance(projects, list):
    for project in projects:
        if isinstance(project, dict):
            if "Exam" in project.get("project_name", "") and "Final" in project.get("project_name", ""):
                status = "validated ✅" if project.get("is_validated") else "not validated ❌"
                print(f'{project["project_name"]} is {status}')
