function validate() {
    var userName = document.getElementById("uname");
    var passWord = document.getElementById("pass");

    if (userName.value.trim() == "") {
        //alert("Blank User Name");
        userName.style.border="2px solid red";
        document.getElementById("blankUser").style.visibility="visible";
        return false;
    }
    else if(passWord.value.trim()=="")
    {
        //alert("Blank Password");
        passWord.style.border="2px solid red";
        document.getElementById("blankpass").style.visibility="visible";
        return false;
    }
    else if(passWord.value.trim().length<5)
    {
        //alert("Password too short");
        passWord.style.border="2px solid red";
        document.getElementById("shortpass").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }

}