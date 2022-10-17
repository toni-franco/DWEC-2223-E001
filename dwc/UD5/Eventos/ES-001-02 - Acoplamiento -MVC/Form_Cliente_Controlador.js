class cForm_Cliente {

    constructor(){
            document.getElementById("aDiv1").addEventListener("click", function(event)
            {
                this.obj=Clientes[0];
                Control_Cliente.rellenar(Clientes[0]);
                event.preventDefault();

            });
            document.getElementById("aDiv2").addEventListener("click", function(event)
            {
                Control_Cliente.rellenar(Clientes[1]);    
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

Control_Cliente = new cForm_Cliente();
Clientes = new DatosClientes();  // Crea dos clientes



