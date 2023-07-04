function login() {
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        "username": username,
        "password": password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        url: "http://localhost:8080/login",
        success: function (data) {
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));
            window.location.href = "../index.html"
        },
        error: function () {
            alert("Sai tên tài khoản hoặc mật khẩu !")
        }
    });
}


//Signup
function save() {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let username = $("#username").val();
    let password = $("#confirm_password").val();
    let avatar = $("#avatar")[0].files[0];
    let roles = $("#roles").val();
    let user = new FormData();
    user.append("name", name);
    user.append("phone", phone);
    user.append("email", email);
    user.append("address", address);
    user.append("username", username);
    user.append("password", password);
    user.append("avatar", avatar);
    user.append("roles", roles);
    $.ajax({
        headers: {
            'Accept': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/signup",
        data: user,
        contentType: false,
        processData: false,
        success: function (data) {
            alert(data.message);
            window.location.href = "http://localhost:63343/mp3-front-end/login/login.html?_ijt=g5koejoj20d6s3l6p9e3almnc3&_ij_reload=RELOAD_ON_SAVE";
        },
        error: function () {
            alert("Đăng ký không thành công!");
        }
    });
}
