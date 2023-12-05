//sections
const mainRoot = document.getElementById("root");
const sectionhallo = document.getElementById("hallo");
const sectionsignin = document.getElementById("sign_in");
const sectionsignup = document.getElementById("sign_up");

//buttons
const btnsignin = document.getElementById("signinbtn");
const btnsignup = document.getElementById("signupbtn");


//listeners
    btnsignin.addEventListener("click", viewSignIn);
    btnsignup.addEventListener("click", viewSignUp);


//functions
    export function viewHello() {
        sectionhallo.style.display = "flex";
        sectionsignin.style.display = "none";
        sectionsignup.style.display = "none";
        mainRoot.style.display = "none";
    }

    function viewSignIn() {
        sectionhallo.style.display = "none";
        sectionsignin.style.display = "flex";
        sectionsignup.style.display = "none";
        mainRoot.style.display = "none";
    }

    function viewSignUp() {
        sectionhallo.style.display = "none";
        sectionsignin.style.display = "none";
        sectionsignup.style.display = "flex";
        mainRoot.style.display = "none";
    }

    export function viewRoot() {
        sectionhallo.style.display = "none";
        sectionsignin.style.display = "none";
        sectionsignup.style.display = "none";
        mainRoot.style.display = "block";
    }


