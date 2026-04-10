function mainFunction()
{
 setTimeout("display()",1000);
}

function display()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("main").style="display:block";
    
}