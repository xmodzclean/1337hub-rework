import json
import os
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

json_files = ["kh7.json", "kh8.json", "rb7.json", "rb8.json", "t7.json", "t8.json", "bg7.json", "bg8.json"]


def process_user(user):
    """Run LDAP command for a user and update close field."""
    login = user.get("login")
    if not login:
        return user

    cmd = f"ldapsearch -LLL uid={login} uid close 2>/dev/null | grep -E '^(uid|close):'"
    try:
        print(f"[DEBUG] Running command for {login}")
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        output = result.stdout.strip()
        print(f"[DEBUG] Output for {login}:\n{output}")

        # Parse close field
        close_value = None
        for line in output.splitlines():
            if line.startswith("close:"):
                close_value = line.split(":", 1)[1].strip()
                break

        if close_value:
            user["close"] = close_value
        else:
            # Default if close not found
            if user.get("accepted") == "yes":
                user["close"] = None
            else:
                user["close"] = "Rejected by Staff"

    except Exception as e:
        print(f"[DEBUG] Error processing {login}: {e}")
        user["close"] = "Rejected by Staff"

    return user


for file_name in json_files:
    if not os.path.exists(file_name):
        print(f"[DEBUG] {file_name} does not exist, skipping...")
        continue

    print(f"[DEBUG] Processing file: {file_name}")
    with open(file_name, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Use threads to process users faster
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = [executor.submit(process_user, user) for user in data]
        updated_users = [future.result() for future in as_completed(futures)]

    # Save back updated JSON
    with open(file_name, "w", encoding="utf-8") as f:
        json.dump(updated_users, f, indent=4)

    print(f"[DEBUG] Updated {file_name}\n")
