function validate() {
    let input = document.forms['myEmail']['email2'].value;
    let error = document.querySelector(".error");
    let wrong = document.querySelector(".wrong");
    let color = document.querySelector(".txtInput");
    let btn = document.querySelector(".btn");
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (input.match(emailPattern)) {
        console.log("emailPattern")
        alert("done")
        // HTMLFormElement.reset()
    } else {
        console.log("erroer")
        error.style.display = "flex";
        wrong.style.display = "flex";
        color.style.border = "2px solid red"
        btn.classList.add("active")
        return false;
    }
}
function foucsOut(){
    console.log("erroer")
    let error = document.querySelector(".error");
    let wrong = document.querySelector(".wrong");
    let color = document.querySelector(".txtInput");
    let btn = document.querySelector(".btn");
    error.style.display = "none";
    wrong.style.display = "none";
    color.style.border = "1px solid #ce9999"
    btn.classList.remove("active")
    // return false;
}