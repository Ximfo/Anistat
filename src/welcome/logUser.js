import {viewRoot} from "./sections";

export const API_USERS = 'http://localhost:3002/users';

const fetchUsers = await fetch(`${API_USERS}`)
    .then(response=>response.json())
    .then(database => {return database})
    .catch(error=>{console.log(error)});

export async function fetchAni(){
    const API_URL = 'http://localhost:3001/anidb';

    const fetchAniDB = await fetch(`${API_URL}`)
        .then(response=>response.json())
        .then(database => {return database})
        .catch(error=>{console.log(error)});

    console.log(fetchAniDB)
}
export function logUser() {
    console.log(fetchUsers)

    const userGiven = document.getElementById("username").value;
    const passGiven = document.getElementById("pass").value;

    const usersList= fetchUsers.map(e=>e.user);

    console.log(usersList);

    if (!(usersList.includes(userGiven))){
        alert("User not exist")
        return
    }

    const truepass = fetchUsers.filter(e => e.user === userGiven).map(e=>e.pass).toString();

    console.log(truepass, passGiven);

    if(truepass === passGiven){
        const showUser = document.querySelector(".showuser");
        const trueuser = fetchUsers.filter(e => e.user === userGiven).map(e=>e.user).toString();
        showUser.innerText = trueuser;
        console.log(trueuser);
        alert(`Access granted to user ${trueuser}`);
        viewRoot();


    }else{
        alert("Password is incorrect");
    }
}
