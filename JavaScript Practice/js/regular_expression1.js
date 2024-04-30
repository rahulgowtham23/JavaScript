function validate()
{
    var userName = document.getElementById("uname").value;

    //var regex = /E00/i;

    // Character set and ranges

    /*
    var regex = /[dsp]imple/;
    var regex = /[a-x]00/;

    var reg = /[a-x A-X]00/;
			
    var reg = /[0-9]abc/;
    
    var reg = /[0-5]a[6-9]c/;
    
    var reg = /[0-5]a[6-9][a-z]/;


    var reg = /[^abc]abc/;
			
    var reg = /[^a-z]abc/;

    */

    if(regex.test(userName))
    {
        alert("Valid UserName");
    }
    else
    {
        document.getElementById("bluser").style.visibility="visible";
    }
}