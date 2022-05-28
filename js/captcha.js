const captcha = document.querySelector(".clave-robot"),
cargarBtn = document.querySelector(".recargar-btn"),
inputArea = document.querySelector("input"),
confirmarBtn = document.querySelector(".enviar-btn");


let allCaracteres = ['A','B','C','D','E','F','G','H','I','3','K','L', 'M','N',
                     'P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c',
                     'f','g','h','i','j','k','1','m','n','o','p','q','r','z',
                     0,1,2,3,4,5,6,7,8,9];


                     function getCaptcha(){
                        for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
                          let randomCharacter = allCaracteres[Math.floor(Math.random() * allCaracteres.length)];
                          captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
                        }
                      }
                      getCaptcha(); //calling getCaptcha when the page open
                      //calling getCaptcha & removeContent on the reload btn click
                      cargarBtn.addEventListener("click", ()=>{
                        removeContent();
                        getCaptcha();
                      });

                      checkBtn.addEventListener("click", e =>{
                        e.preventDefault(); //preventing button from it's default behaviour
                        statusTxt.style.display = "block";
                        //adding space after each character of user entered values because I've added spaces while generating captcha
                        let inputVal = inputArea.value.split('').join(' ');
                        if(inputVal == captcha.innerText){ //if captcha matched
                          statusTxt.style.color = "#105aa4";
                          statusTxt.innerText = "Nice! You don't appear to be a robot.";
                          setTimeout(()=>{ //calling removeContent & getCaptcha after 2 seconds
                            removeContent();
                            getCaptcha();
                          }, 2000);
                        }else{
                          statusTxt.style.color = "#03e1e4";
                          statusTxt.innerText = "Captcha not matched. Please try again!";
                        }
                      });
                      function removeContent(){
                        inputArea.value = "";
                        captcha.innerText = "";
                        statusTxt.style.display = "none";
                      }