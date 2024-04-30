document.write("<h1>If else control statement</h1>");

// odd or even

var num = 9;

if (num % 2 == 0) 
{
    document.write("<h3>"+num+" "+" is Even Number</h3>");
}
else
{
    document.write("<h3>"+num+" "+" is Odd Number</h3>");
}


// positive or negative

var x = -8;

if (x >0) 
{
    document.write("<h3>"+x+" "+" is Positive Number</h3>");
}
else if(x<0)
{
    document.write("<h3>"+x+" "+" is Negative Number</h3>");
}
else
{
    document.write("<h3>"+x+" "+" is Zero</h3>");
}


// positive and even

var y=7;

if(y>0)
{
    if(y%2==0)
    {
        document.write("<h3>"+y+" "+" is Positive and Even Number</h3>");
    }
    
    else
    {
        document.write("<h3>"+y+" "+" is Positive but its odd Number</h3>");
    }
}
else
{
    document.write("<h3>"+y+" "+" is Negative Number</h3>");
}