function validate()
{
    var text = document.getElementById("phoneNum").value;

    var regex = /^[7-9]\d{9}$/;

    if(regex.test(text))
    {
        document.getElementById("invalidPhoneNum").innerHTML="Valid";
        document.getElementById("invalidPhoneNum").style.visibility="visible";
        document.getElementById("invalidPhoneNum").style.color="green";

    }
    else
    {
        document.getElementById("invalidPhoneNum").style.visibility="visible";
    }
}