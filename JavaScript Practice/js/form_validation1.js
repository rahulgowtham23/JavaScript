function validate() {
    var userName = document.getElementById("uname").value;
    var passWord = document.getElementById("pass").value;

    if (userName.trim() == "" || passWord.trim() == "") {
        alert("No blank values allowed");
        return false;
    }
    else
    {
        true;
    }

}