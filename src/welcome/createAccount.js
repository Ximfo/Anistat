import {viewRoot} from "./sections";

const adduser = async (user,pass) => {
    const API_USERS = 'http://localhost:3002/users';
    const userData = {
        user: user,
        pass: pass,
    };
    console.log(userData)
    try {

        const Usersdatabase = await fetch(`${API_USERS}`)
            .then(response => response.json())
            .then(database => {
                return database.map(element => element.user);
            })
            .catch(error => {
                console.log(error);
            });

        if (Usersdatabase.includes(userData.user)) {
            alert("This user is alredy added in database.");
            return;
        }

        const res = await fetch(`${API_USERS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const data = await res.json();

        if (!res.ok) {
            console.log(data);
            return;
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    alert("User added to database");
    setUser(user);
    viewRoot();
}

function setUser(username){

    const showUser = document.querySelector(".showuser");
    showUser.innerText = username;
    console.log(username);
}
export function Checkuser() {

    const newUser = document.getElementById("newuser").value;
    console.log(newUser);

    const newPass = document.getElementById("newpass").value;

    const rptPass = document.getElementById("rptpass").value;

    if (newUser.length < 3) {
        alert("User name must have minimum 3 alphanumeric characters");
        return
    }else if (newPass.length < 4) {
        alert("Password must have minimum 4 alphanumeric characters");
        return
    }else if (!(newPass === rptPass)) {
        alert("The repeated password is different from specified  one");
        return
    }
    adduser(newUser,newPass);



}
