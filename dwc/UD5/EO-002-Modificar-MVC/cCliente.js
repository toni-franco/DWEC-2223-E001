class cCliente {

    constructor(){
            this.obj=aClientes[0];
            this.VisualizoObj=0;

            document.getElementById("aDiv1").addEventListener("click", function(event)
            {
                // OBSERVAR QUE NO SE PUEDE USAR this.
                ctlCliente.obj=aClientes[0];
                ctlCliente.VisualizoObj=0;
                ctlCliente.rellenar(aClientes[0]);
                event.preventDefault();

            });
            document.getElementById("aDiv2").addEventListener("click", function(event)
            {
                ctlCliente.obj=aClientes[1];
                ctlCliente.VisualizoObj=1;
                ctlCliente.rellenar(aClientes[1]);    
                event.preventDefault();
            });

            document.getElementById("bModificarCliente").addEventListener("click", function(event)
            {
                
                var vl=document.getElementsByName('genero');

                if (vl[0].checked) {                   
                    ctlCliente.obj.genero = document.getElementById('mr').value
                }
               
                    if (vl[1].checked) {    
                        ctlCliente.obj.genero = document.getElementById('mrs').value
                }
                if (vl[2].checked) { 
                    ctlCliente.obj.genero = document.getElementById('miss').value
                }
                ctlCliente.obj.fname=document.getElementById('fname').value;
                ctlCliente.obj.lname=document.getElementById('lname').value ;
                ctlCliente.obj.email=document.getElementById('email').value;
                /*
                document.getElementById('tel').value = cliente.phone;
                document.getElementById('passwd').value = cliente.passwd;
                document.getElementById('country').value = cliente.country;
                document.getElementById('terms').checked = true;
                */
                omClientes.Modificar(ctlCliente.VisualizoObj, ctlCliente.obj )
                aClientes=omClientes.getClientes();
                event.preventDefault();
            });

    }

    rellenar(cliente){       

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


omClientes = new mClientes();  // Crea dos clientes
aClientes=omClientes.getClientes();
ctlCliente = new cCliente();



