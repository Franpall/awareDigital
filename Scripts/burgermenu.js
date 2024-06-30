function abrirMenu(){
    if(document.getElementById("barraLateral").className == "oculto")
    {
        document.getElementById("barraLateral").className = "visible";
    }
    else{
        document.getElementById("barraLateral").className = "oculto";
    }

}

function cambiarSeleccion(opcion)
{
    for(var i = 1; i < 5; i++ )
    {
        var idtemp ="opcion" + i;
        document.getElementById(idtemp).className = "nothing";  
    }

    var identificacion = "opcion" + opcion;
        document.getElementById(identificacion).className = "seleccionado";
}