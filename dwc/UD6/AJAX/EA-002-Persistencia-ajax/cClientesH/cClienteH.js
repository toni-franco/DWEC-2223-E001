


omClientesH = new mClientesH();  // Crea dos clientes
aClientes=omClientesH.getClientes();

class cClienteH {

    constructor(){
            this.obj=aClientes[0];
            this.VisualizoObj=0;

            // EVENTOS DE LA TABLA 
            /*
            document.getElementById("aDiv1").addEventListener("click", function(event)
            {
                // OBSERVAR QUE NO SE PUEDE USAR this.
                ctlCliente.obj=aClientes[0];
                ctlCliente.VisualizoObj=0;
                ctlCliente.SetVista(aClientes[0]);
                event.preventDefault();

            });
          */


            var Tabla = "";
            Tabla = "<tr><th>Nombre</th><th>Apellidos</th><th>Email</th><th>Teléfono</th></tr>"
            for (var i = 0; i < aClientes.length; i++) {
                Tabla = Tabla + "<tr id='" + i + "'><td>" + aClientes[i].fname + "</td><td>" + aClientes[i].lname + "</td><td>" + aClientes[i].email + "</td><td>" + aClientes[i].phone + "</td><td><button>Eliminar</button></td><tr>";
            }
            document.getElementById('tClientes').innerHTML = Tabla; 
          
    }

    // DOS METODOS ACOPLADOS A LA VISTA !!!!
    getVista() {
     
    
        var elementsTitle = document.getElementsByName("title");
    
        var title = "";
        for (var i = 0; i < elementsTitle.length; i++) {
          if (elementsTitle[i].checked) {
            title = elementsTitle[i].value;
          }
        }
    
        var firstname = document.getElementById("fname").value;
        var lastname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("tel").value;
        var password = document.getElementById("passwd").value;
        var country = document.getElementById("country").value;
    
        var cli = new pCliente(
          title,
          firstname,
          lastname,
          email,
          phone,
          password,
          country
        );
    
        return cli;
      }
    

    SetVista(cliente){       

        if (document.getElementById('mr').value == cliente.genero) {
            document.getElementById('mr').checked = true;
        }
        if (document.getElementById('mrs').value == cliente.genero) {
            document.getElementById('mrs').checked = true;
        }
        if (document.getElementById('miss').value == cliente.genero) {
            document.getElementById('miss').checked = true;
        }
        document.getElementById('fname').value = cliente.fname;
        document.getElementById('lname').value = cliente.lname;
        document.getElementById('email').value = cliente.email;
        document.getElementById('tel').value = cliente.phone;
        document.getElementById('passwd').value = cliente.passwd;
        document.getElementById('country').value = cliente.country;
        document.getElementById('terms').checked = true;
    }
}


//omClientes = new mClientes();  // Crea dos clientes
//aClientes=omClientes.getClientes();

// oVCliente= new vCliente();

ctlClienteH = new cClienteH();





