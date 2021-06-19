function irAlLogin() {
    window.location.assign("./login.html")
}
function irAlSignup() {
    window.location.assign("./signup.html")
}
function clickOnSignUp() {

    var username = $('#name').val()
    var password = $('#password').val()
    var gender = $("#gender option:selected").text()
    var age = $('#number').val()
    var hair_color = $("#hair_color option:selected").text()

    var user = {
        username: username,
        password: password,
        gender: gender,
        age: age,
        hair_color: hair_color,
    }

    fetch('http://localhost/simple-api-http/php/signup.php', {
        method: 'POST',
        body: JSON.stringify(user),
    }).then(response => {
        if (response.status === 200) {
            window.location.assign("./users.html")
        }
    })
}


function clickOnLogin() {

    var username = $('#name').val()
    var password = $('#password').val()

    var user = {
        username: username,
        password: password,
    }

    fetch('http://localhost/simple-api-http/php/login.php', {
        method: 'POST',
        body: JSON.stringify(user),
    }).then(response => {
        if (response.status === 200) {
            window.location.assign("./users.html")
        }
    })
}
