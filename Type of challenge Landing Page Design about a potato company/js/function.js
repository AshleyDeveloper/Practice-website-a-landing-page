const button = document.getElementById("button");

let inputName = document.getElementById("inputName");
const inputMail = document.getElementById("inputMail");
const inputPhone = document.getElementById("inputPhone");
const inputStreet = document.getElementById("inputStreet");

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")
const span4 = document.getElementById("span4")

const filled = document.querySelector(".filled");

button.addEventListener("click", () => {
    let valueName = inputName.value;
    let valueMail = inputMail.value;
    let valuePhone = inputPhone.value;
    let valueStreet = inputStreet.value;

    let convert = Number.parseInt(valuePhone);
    
    if(valueName != undefined && valueName != ""){
        if(valueMail != undefined && valueMail != ""){
            if(valuePhone != undefined && valuePhone != ""){
                if(typeof convert == "number"){
                    if(valueStreet != undefined && valueStreet != ""){
                        span4.textContent = ""
                        filled.classList.toggle("open")
                    }else{
                        span4.textContent = "error-write your street"
                    }
                    span3.textContent = ""
                }else{
                    span3.textContent = "They are just numbers"
                }
                span3.textContent = ""
            }else{
                span3.textContent = "error-write your number"
            }
            span2.textContent = ""
        }else{
            span2.textContent = "error-write your mail"
        }
        span1.textContent = ""
    }else{
        span1.textContent = "error-write your name"
    }
})