// funcion para ocultar y mostra la contraseña

const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");



      pwShowHide.forEach(eyeIcon => {
          eyeIcon.addEventListener("click", () => {
              pwFields.forEach(pwFields => {
                  if (pwFields.type ==="password"){
                      pwFields.type = "text";


                      pwShowHide.forEach(icon => {
                          icon.classList.replace("fa-eye-slash", "fa-eye");
                      })
                  }
                  else {
                      pwFields.type = "password";


                      pwShowHide.forEach(icon => {
                        icon.classList.replace("fa-eye", "fa-eye-slash");
                    })
                  }
              })
          })
      })

// funcion para mostra y ocultar login y registro 

signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});