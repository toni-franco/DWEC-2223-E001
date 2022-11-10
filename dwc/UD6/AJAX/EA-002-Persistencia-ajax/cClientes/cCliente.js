var aClientes = [];
omClientes = new mClientes();  // Crea dos clientes
aClientes=omClientes.getClientes();

class cCliente {

    constructor(){
            this.obj=aClientes[0];
            this.VisualizoObj=0;

            document.getElementById("aDiv1").addEventListener("click", function(event)
            {
                // OBSERVAR QUE NO SE PUEDE USAR this.
                ctlCliente.obj=aClientes[0];
                ctlCliente.VisualizoObj=0;
                ctlCliente.SetVista(aClientes[0]);
                event.preventDefault();

            });
            document.getElementById("aDiv2").addEventListener("click", function(event)
            {
                ctlCliente.obj=aClientes[1];
                ctlCliente.VisualizoObj=1;
                ctlCliente.SetVista(aClientes[1]);    
                event.preventDefault();
            });

            document.getElementById("ModificarCliente").addEventListener("click", function(event)
            {
                ctlCliente.obj=ctlCliente.getVista();
                omClientes.Modificar(ctlCliente.VisualizoObj, ctlCliente.obj )                
                event.preventDefault();
            });

            document.getElementById("AñadirCliente").addEventListener("click", function (event) {
                ctlCliente.obj = ctlCliente.getVista();
                omClientes.AddCliente( ctlCliente.obj);
                ctlCliente.VisualizoObj = aClientes.length - 1;
            });


            document.getElementById("RetrocedeCliente").addEventListener("click", function (event) {
              if (ctlCliente.VisualizoObj > 0) {
                ctlCliente.obj = aClientes[ctlCliente.VisualizoObj - 1];
                //oVCliente.SetVista(ctlCliente.obj);
                ctlCliente.SetVista(ctlCliente.obj);
                ctlCliente.VisualizoObj -= 1;
              }
            });
      
          document.getElementById("AvanzarCliente").addEventListener("click", function (event) {
              if (ctlCliente.VisualizoObj < aClientes.length - 1) {
                var cliente = aClientes[ctlCliente.VisualizoObj + 1];
                //oVCliente.SetVista(cliente);
                ctlCliente.SetVista(cliente);
                ctlCliente.VisualizoObj += 1;
              }
            });
            document.getElementById("CargaClientes").addEventListener("click", function (event) {
                omClientes.CargarClientes();
                ctlCliente.obj=aClientes[0];
                ctlCliente.VisualizoObj=0;
                ctlCliente.SetVista(aClientes[0]);
                event.preventDefault(); 
              /*
               if (aClientes.length<=0){
                    for(var i=1;i<100000;i++){} // espera y carga clientes
                    aClientes=omClientes.getClientes();
                    ctlCliente.obj=aClientes[0];
                    ctlCliente.VisualizoObj=0;
                    ctlCliente.SetVista(aClientes[0]);
                    event.preventDefault();                
               }
               else {                
                    ctlCliente.obj=aClientes[0];
                    ctlCliente.VisualizoObj=0;
                    ctlCliente.SetVista(aClientes[0]);
                    event.preventDefault(); 
               }

               */ 
                           
                
              });

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
    
        var firstname = document.getElementById("fname").value;
        var lastname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("tel").value;
        var password = document.getElementById("passwd").value;
        var country = document.getElementById("country").value;

        var idCliente= aClientes[this.VisualizoObj].id;

        var cli = new pCliente(idCliente,genero, firstname, lastname,
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
        document.getElementById('idsql').value=cliente.id;
        

    }
}



ctlCliente = new cCliente();





