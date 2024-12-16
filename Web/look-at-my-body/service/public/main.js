const createLoginQuery = (uname, pass) =>
  JSON.stringify({
    query: `mutation Login ($uname: String!, $pass: String!){
        login (username: $uname, password: $pass) {
            token
        }
    }`,
    variables: {
      uname,
      pass,
    },
  });
async function onLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: createLoginQuery(username, password),
  });
  const data = await result.json();
  if (data.errors) {
    alert("Invalid credential!!");
  } else {
    const {
      data: {
        login: { token },
      },
    } = data;
    document.cookie = `auth=${token}`;
    window.location.href = "/";
  }
}

function onLogout() {
  document.cookie = "";
  window.location.href = "/login";
}
