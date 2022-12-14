var aClientes = [];
omClientes = new mClientes();
aClientes = omClientes.getClientes();


var aPaises = [];
omPaises = new mPaises();
aPaises = omPaises.getPaises();

class cClienteH {



    constructor() {
        omClientes.CargarClientes();
        this.Recargar();
        document.getElementById("CargaClientes").addEventListener("click", function (event) {
            omClientes.CargarClientes();
            oVCliente.SetTable(aClientes);
            event.preventDefault();

        });
        document.getElementById("AñadirCliente").addEventListener("click", function (event) {
            ctlCliente.obj = oVCliente.getVista();
            omClientes.AddCliente(ctlCliente.obj);
            ctlCliente.VisualizoObj = aClientes.length - 1;
            ctlCliente.Recargar();
        });
        document.getElementById("ModificarCliente").addEventListener("click", function (event) {
            ctlCliente.obj = oVCliente.getVista();
            var pos = oVCliente.getPosicion();
            console.log("Modificando posicion: " + pos);

            var result = omClientes.Modificar(pos, ctlCliente.obj)
            ctlCliente.Recargar();

            document.getElementById("Editar").style.display = "none";
            document.getElementById("Tabla").style.display = "block";

            event.preventDefault();
        });
        document.getElementById("VerTabla").addEventListener("click", function (event) {
            document.getElementById("Editar").style.display = "none";
            document.getElementById("Tabla").style.display = "block";
        });

    }

    BorrarFila(fila) {
        // Borrar de la BD
        var rdo=omClientes.DelCliente(fila);
        if (rdo ==="1") {
            document.getElementById("fila" + fila).remove();
        }
        
    }

    SeleccionarFila(fila) {
        oVCliente.posicion = fila;
        document.getElementById("Editar").style.display = "block";
        document.getElementById("Tabla").style.display = "none";
        console.log("Posicion: "+fila)
        //oVCliente.SetVista(omClientes.getCliente(fila));
        oVCliente.SetVista(aClientes[fila]);
    }
  
    Recargar() {

        oVCliente.SetTable(aClientes);
    }
    DelCliente(i) {
        omClientes.DelCliente(i);
    }
}

oVCliente = new vClienteH();
ctlCliente = new cClienteH();



