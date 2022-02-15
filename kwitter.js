function addUser()
{
    user_name= document.getElementById("user_username").value;
    user_password= document.getElementById("user_password").value;

    localStorage.setItem("Username", user_name);
    localStorage.setItem("Password", user_password);

    window.location.replace("kwitter_room.html"); 
}