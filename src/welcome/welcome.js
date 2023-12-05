import React from "react";
import {viewHello} from "./sections";
import {Checkuser} from "./createAccount";
import {logout} from "./logout";
import {logUser} from "./logUser";

viewHello();

const btnaccount = document.getElementById("accountBtn");
btnaccount.addEventListener('click', Checkuser);
btnaccount.addEventListener('click', getUser);

const btnlogin = document.getElementById("loginBtn");
btnlogin.addEventListener('click', logUser);
btnlogin.addEventListener('click', getUser);

export function getUser(){
    const mainUser=document.querySelector(".showuser").innerHTML;
    console.log(mainUser)
    return mainUser
}


export const Logged=()=>{
    return(
        <>
            <section className={"home"} id={"activeuser"}>
                <h1>You are logged</h1>
                <button className={"accountBtn"} onClick={logout}>LOG OUT</button>
            </section>
        </>
    )
}
