var aClientes = [];
omClientes = new mClientes();
aClientes = omClientes.getClientes();

var aPaises = [];
omPaises = new mPaises();
aPaises = omPaises.getPaises();

var aCompras = [];
omCompras = new mCompras();
aCompras = omCompras.getCompras();
////console.log(aCompras);

class cCliente {

  constructor() {
    this.obj = aClientes[0];
    this.VisualizoObj = 0;
    // this.Cargar();

    document.getElementById("aDiv1").addEventListener("click", function (event) {
      // OBSERVAR QUE NO SE PUEDE USAR this.
      ctlCliente.obj = aClientes[0];
      ctlCliente.VisualizoObj = 0;
      ctlCliente.SetVista(aClientes[0]);
      ctlCliente.CargarCompras();
      event.preventDefault();

    });
    document.getElementById("aDiv2").addEventListener("click", function (event) {
      var num = aClientes.length - 1;
      ctlCliente.obj = aClientes[num];
      ctlCliente.VisualizoObj = num;
      ctlCliente.SetVista(aClientes[num]);
      ctlCliente.CargarCompras();
      event.preventDefault();
    });

    document.getElementById("ModificarCliente").addEventListener("click", function (event) {
      ctlCliente.obj = ctlCliente.getVista();      
      omClientes.Modificar(ctlCliente.VisualizoObj, ctlCliente.obj)
      event.preventDefault();
    });
    document.getElementById("BorrarCliente").addEventListener("click", function (event) {
      ctlCliente.obj = ctlCliente.getVista();
      omClientes.DelCliente(ctlCliente.VisualizoObj);
      ctlCliente.ClearVista();
      event.preventDefault();
    });

    document.getElementById("AñadirCliente").addEventListener("click", function (event) {
      ctlCliente.obj = ctlCliente.getVista();
      omClientes.AddCliente(ctlCliente.obj);
      ctlCliente.VisualizoObj = aClientes.length - 1;
      event.preventDefault();
    });


    document.getElementById("RetrocedeCliente").addEventListener("click", function (event) {
      if (ctlCliente.VisualizoObj > 0) {
        ctlCliente.obj = aClientes[ctlCliente.VisualizoObj - 1];
        //oVCliente.SetVista(ctlCliente.obj);
        ctlCliente.SetVista(ctlCliente.obj);
        ctlCliente.VisualizoObj -= 1;
        ctlCliente.CargarCompras();
      }
      event.preventDefault();
    });

    document.getElementById("AvanzarCliente").addEventListener("click", function (event) {
      if (ctlCliente.VisualizoObj < aClientes.length - 1) {
        var cliente = aClientes[ctlCliente.VisualizoObj + 1];
        //oVCliente.SetVista(cliente);
        ctlCliente.SetVista(cliente);
        ctlCliente.VisualizoObj += 1;
        ctlCliente.CargarCompras();
      }
      event.preventDefault();
    });

    document.getElementById("VerCompras").addEventListener("click", function (event) {
     // ctlCliente.CargarCompras();
      document.getElementById("contenedor-tabla-compras").style.display = "block";
      event.preventDefault();
    });
    
    document.getElementById("OcultarCompras").addEventListener("click", function (event) {
      document.getElementById("contenedor-tabla-compras").style.display = "none";
      event.preventDefault();
    })

    document.getElementById("CargaClientes").addEventListener("click", function (event) {
      ctlCliente.Cargar();
      ctlCliente.CargarCompras();
      document.getElementById("contenedor-tabla-compras").style.display = "block";
      event.preventDefault();
    });
   
    // Fin constructor
  }

  CargarCompras() {
    var cliente = aClientes[ctlCliente.VisualizoObj];
    var lista = omCompras.getComprasDeCliente(cliente.id);
    //var lista = omCompras.getComprasDeClienteRed(cliente.id);
      //console.log(lista);
      

    oVCompra.SetTable(lista);
  }

  Cargar() {
    omClientes.CargarClientes();
    aClientes = omClientes.getClientes();
    this.obj = aClientes[0];
    this.VisualizoObj = 0;
    this.SetVista(aClientes[0]);      
  }



  // DOS METODOS ACOPLADOS A LA VISTA !!!!
  getVista() {


    var elementsTitle = document.getElementsByName("title");

    var genero = "";
    for (var i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].checked) {
        genero = elementsTitle[i].value;
      }
    }
    var id = document.getElementById("id").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;
    var passwd = document.getElementById("passwd").value;
    var id_pais = document.getElementById("id_pais").value;
    ////////console.log("Se utilizará la id de pais: " + id_pais);
    id_pais++;


    //var idCliente = aClientes[this.VisualizoObj].id;
    var cli = new pCliente(id, genero, fname, lname, email, phone, passwd, id_pais);


    return cli;
  }

  ClearVista() {
    document.getElementById('mr').checked = false;
    document.getElementById('mrs').checked = false;
    document.getElementById('miss').checked = false;
    document.getElementById('id').value = null;
    document.getElementById('fname').value = null;
    document.getElementById('lname').value = null;
    document.getElementById('email').value = null;
    document.getElementById('tel').value = null;
    document.getElementById('passwd').value = null;
    document.getElementById('id_pais').value = null;
    document.getElementById('terms').checked = false;
  }



  SetVista(cliente) {

    if (document.getElementById('mr').value == cliente.genero) {
      document.getElementById('mr').checked = true;
    }
    if (document.getElementById('mrs').value == cliente.genero) {
      document.getElementById('mrs').checked = true;
    }
    if (document.getElementById('miss').value == cliente.genero) {
      document.getElementById('miss').checked = true;
    }
    document.getElementById('id').value = cliente.id;
    document.getElementById('fname').value = cliente.fname;
    document.getElementById('lname').value = cliente.lname;
    document.getElementById('email').value = cliente.email;
    document.getElementById('tel').value = cliente.phone;
    document.getElementById('passwd').value = cliente.passwd;
    document.getElementById('id_pais').options.item(cliente.id_pais - 1).selected = 'selected';
    ////////console.log(cliente.id_pais);
    document.getElementById('terms').checked = true;
  }
  
  buscarcli() {
    var nomapell = document.getElementById('datoapellido').value;
    var nomdat = document.getElementById('datonombre').value;
    var id = document.getElementById('datoid').value;

    var vl = [];
    vl.push(id);
    vl.push(nomdat);
    vl.push(nomapell);
    return vl;
  }
}

ctlCliente = new cCliente();
oVCompra = new vCompras();








