function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="lala")
{
   alert('login correcto');
    return false;
}
else
{
    alert("Username or password incorrect");
}
}