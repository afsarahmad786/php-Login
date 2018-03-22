
function check()
{

var pass1=document.getElementById('pass').value;
var pass2=document.getElementById('re-pass').value;
if(pass1.length==0 && pass2.length==0)
{
	document.write('please enter some pass');
}
else
{
if(pass1==pass2)
{
	document.write('hello welcome');
}
else
{
	document.write('wrong username and password');
}	
}


}