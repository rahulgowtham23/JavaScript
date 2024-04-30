function validate()
{
    var isStudentNameValid = true;

    //alert(document.getElementById("name").value);

    if(document.getElementById("name").value.trim()=="")
    {
        isStudentNameValid = false;
        document.getElementById("invalidName").innerHTML="Please enter your name";
        document.getElementById("invalidName").style.color="red";

        return false;
    }

    else
    {
        document.getElementById("invalidName").innerHTML="Valid";
        document.getElementById("invalidName").style.color="green";

        return true;
    }
    
    // if(isStudentNameValid==false)
    // {
    //     return false;
    // }
    // else
    // {
    //     return true;
    // }
}


function resetform()
{
    document.getElementById("invalidName").innerHTML="";
}