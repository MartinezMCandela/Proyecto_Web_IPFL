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

const direccion="Lamadrid 1478";
const nombre_completo="Paolo Rossi";




function compra_menu_2(){
	location.href='carrito.html';
	alert("Compraste el menù: NUGGETS");
	
	
}	
function compra_menu_1(){
	location.href='carrito.html';
	alert("Compraste el menù: HAMBURGUESA");
	
}	
function compra_menu_3(){
	location.href='carrito.html';
	alert("Compraste el menù: ENSALADA");
	
}	
function compra_menu_4(){
	location.href='carrito.html';
	alert("Compraste el menù: HELADO");
	
}

function paga_tu_compra(){
	alert("TOTAL A DEBITAR xxxx xxxx xxxx 2030: 3000$");
	location.href= 'Final.html';
	
}
 

