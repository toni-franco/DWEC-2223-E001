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
            //console.log("Modificando posicion: " + pos);

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


    miFiltrado() {
        var input, palabraFiltro, table, tr, td,td4, i, txtCliente, txtPais;
        input = document.getElementById("MiBusqueda");
        palabraFiltro = input.value.toUpperCase();
        table = document.getElementById("tClientes");
        tr = table.getElementsByTagName("tr");
        
        // Recorremos todas las celdas de la columna 0 ( Nombre cliente)
        
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtCliente = td.textContent || td.innerText;
            if (txtCliente.toUpperCase().indexOf(palabraFiltro) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
        
        // Columna 4 (pais)
        /*
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtPais = td.textContent || td.innerText;
            if (txtPais.toUpperCase().indexOf(palabraFiltro) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
        */
        
        // Columna 1 nombre o columna 4 (pais)
        /*
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          td4 = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtCliente= td.textContent || td.innerText;
            txtPais= td4.textContent || td4.innerText;
            if (txtCliente.toUpperCase().indexOf(palabraFiltro) > -1 || txtPais.toUpperCase().indexOf(palabraFiltro) > -1 ) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
        */
        
        

    }



    BorrarFila(fila) {
        // Borrar de la BD
        var rdo = omClientes.DelCliente(fila);
        if (rdo === "1") {
            document.getElementById("fila" + fila).remove();
        }

    }

    SeleccionarFila(fila) {
        oVCliente.posicion = fila;
        document.getElementById("Editar").style.display = "block";
        document.getElementById("Tabla").style.display = "none";
        //console.log("Posicion: " + fila)
        //oVCliente.SetVista(omClientes.getCliente(fila));
        oVCliente.SetVista(aClientes[fila]);
    }
    BuscarClientes(text) {
        if (text == "") {
            oVCliente.SetTable(filtredClientes);
        } else {
            console.log(text);
            var filtredClientes = new Array();
            for (var i = 0; i < aClientes.length; i++) {

                if (aClientes[i].id.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                } else if (aClientes[i].fname.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                } else if (aClientes[i].lname.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                } else if (aClientes[i].genero.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                } else if (aClientes[i].email.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                } else if (aClientes[i].phone.search(text) != -1) {
                    console.log(aClientes[i]);
                    filtredClientes.push(aClientes[i]);
                }
            }
            oVCliente.SetFiltredTable(filtredClientes);
        }


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



