var button = document.getElementById('mainButton');

var openForm = function() {
	button.className = 'active';
};

var checkInput = function(input) {
	if (input.value.length > 0) {
		input.className = 'active';
	} else {
		input.className = '';
	}
};

function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="lala")
{window.location.href = "home.html";
    return false;
}
else
{
    alert("Usuario o clave incorrecta");
}
}