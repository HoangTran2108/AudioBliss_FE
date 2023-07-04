let user = JSON.parse(localStorage.getItem("user"));
if (user != null) {
    let token = user.accessToken;
    let username = user.name;
    let avatar = user.avatar;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        type: "GET",
        url: "http://localhost:8080/hello",
        success: function () {
            let avatarUrl = "img/files/" + avatar
            document.getElementById("avatar").setAttribute('src', avatarUrl);
            let user;
            user = `<p>${username}</p>`
            document.getElementById("user").innerHTML = user;
        }
    })
} else {
    window.location = "http://localhost:63343/mp3-front-end/login/login.html";
}

function logout() {
    localStorage.removeItem("user")
    window.location.href = "http://localhost:63343/mp3-front-end/login/login.html";
}
