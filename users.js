$(document).ready(function () {
    fetch('http://localhost/simple-api-http/php/get_users.php?id=1').then(response => {

        if (response.status === 200) {

            response.json().then(function (usersList) {

                for (var i = 0; i < usersList.length; i++) {
                    var user = usersList[i]

                    var userCardHTML = `<div class="user-grid-boy">
                    <div class="age">
                    `+ user.age + `
                          </div>
                      <img class="user-img" src="https://i.ibb.co/RvXRMRc/miliiiiiii.jpg" alt="Foto de perfil" />
                      <div class="info">
                          <div class="name">
                          `+ user.username + `
                          </div>
                          <div class="username">
                              @`+ user.username + `
                          </div>
                          <div class="gender">
                          `+ user.gender + `
                          </div>
                      </div>
                  </div>
                  `

                    $('.user-grid-container').append(userCardHTML)
                }
            })

        }

    })
})
