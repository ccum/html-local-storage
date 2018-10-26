var loadContacList = function(){

}
var saveContac= function(){
    var numero = document.getElementById('numeroTelefono').value;
    var nombre = document.getElementById('nombreContacto').value;
    console.log(numero,nombre);
    localStorage.setItem(numero,nombre);
    addElementToTable(numero,nombre);

}

var getAllContacts = function(){
    for (var i = 0; i<localStorage.length; i++) {
        var num  = localStorage.key(i);
        var nombre = localStorage.getItem(localStorage.key(i));
        addElementToTable(num,nombre);

    }
}
var eliminarElementInNode= function(numero){
    console.log(numero);
    var elementDelete = document.getElementById("element-" + numero).remove();
} 
var eliminarContacto= function(numero){
    eliminarElementInNode(numero)
    localStorage.removeItem(numero);
}  
var addElementToTable = function(numero,nombre){
    var table = document.getElementById('contactList');
    var tr = document.createElement("tr");
    tr.setAttribute('id',"element-" + numero);
    var tdNumero = document.createElement("td");
    var tdNombre = document.createElement("td");
    var tdOpciones = document.createElement("td");
    var txtNumero = document.createTextNode(numero);
    var txtNombre = document.createTextNode(nombre);
    var opciones = document.createElement('a');
    var txtOpciones = document.createTextNode("Eliminar");
    opciones.appendChild(txtOpciones);
    opciones.setAttribute('href', '#');
    opciones.setAttribute('onclick', "eliminarElementInNode("+numero+")");    
    tdNumero.appendChild(txtNumero);
    tdNombre.appendChild(txtNombre);
    tdOpciones.appendChild(opciones);
    tr.appendChild(tdNumero);
    tr.appendChild(tdNombre);
    tr.appendChild(tdOpciones);
    table.appendChild(tr);
}

var buscarContacto = function(){
    deleteAllTable();
    var nombreContacto = document.getElementById("nombreContactoBuscar").value;
    console.log(nombreContacto);
    for (var i = 0; i<localStorage.length; i++) {
        if(localStorage.getItem(localStorage.key(i))==nombreContacto){
            addElementToTable(localStorage.key(i),localStorage.getItem(localStorage.key(i)));
        }
    }
};

var deleteAllTable = function(){
    for (var i = 0; i<localStorage.length; i++) {
        try{
            eliminarElementInNode(localStorage.key(i));
        }catch(e){}
    }
}

var verTodo= function(){
    deleteAllTable();
    getAllContacts();
    document.getElementById("nombreContactoBuscar").value="";
}
getAllContacts();
