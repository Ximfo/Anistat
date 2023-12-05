import {viewHello} from "./sections";

export function logout(){
    const showuser=document.querySelector(".showuser")
    showuser.innerText="";
    viewHello();
}