let buttonSubmit = document.getElementById("button-button");
if (buttonSubmit) {
    buttonSubmit.addEventListener('click', validateContactForm, false);
}

function validateContactForm() {

    let inputName = document.getElementById("fname");
    let inputEmail = document.getElementById("femail");
    let inputEnquiry = document.getElementById("fenquiry");

    if (inputName.value == null || inputName.value == "") {
        inputName.classList.add("invalid")
        alert("Name must be filled out")
        return false
    }

    if (inputEmail.value == null || inputEmail.value == "") {
        inputEmail.classList.add("invalid")
        alert("Email must be filled out")
        return false
    } 
    
    if (inputEnquiry.value == null || inputEnquiry.value == "") {
        inputEnquiry.classList.add("invalid")
        alert("Message must be filled out")
        return false
    }
}   