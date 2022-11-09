var aClientes = [];

// Pojo Cliente
class pCliente {
  constructor(genero, fname, lname, email, phone, passwd, country) {
    this.genero = genero;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phone = phone;
    this.passwd = passwd;
    this.country = country;
  }
}

class mClientes {
  constructor() {
    

    //INSERT INTO `clientes` (`id`, `genero`, `fname`, `lname`, `email`, `phone`, `passwd`, `country`) VALUES (NULL, 'mr', 'elvis', 'Wiliams', 'elvis@yo.es', '1291212', '121212', 'ws');




  }

  getClientes(){     
     return aClientes;
  }

  AddCliente(cliente) {
    aClientes.push(cliente);
    this.GuardaClientes();
  }

  Modificar(num, DN) {
    aClientes[num].genero = DN.genero;
    aClientes[num].fname = DN.fname;
    aClientes[num].lname = DN.lname;
    aClientes[num].email = DN.email;
    aClientes[num].phone = DN.phone;
    aClientes[num].passwd = DN.passwd;
    aClientes[num].country = DN.country;
    this.GuardaClientes();
  }

  GuardaClientes(){    
    window.localStorage.setItem('Misclientes', JSON.stringify(aClientes));
  }

  CargarClientes(){
    // aClientes = JSON.parse(window.localStorage.getItem("Misclientes"));   
    
    
    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var clientes = JSON.parse(this.responseText);
            //var array = Array.from(this.responseText);

             /* alumnos.foreach((item, index) {
                      
                        }
            )*/
            for (var i =0; i<clientes.length;i++){ 
              var cliente= new pCliente(clientes[i][0],clientes[i][1],clientes[i][2],clientes[i][3],clientes[i][4],clientes[i][5],clientes[i][6]);
              aClientes.push(cliente);
            }
            
        }
    }
   // var parametros = JSON.stringify(objeto);
    xhr.open("GET", "../get-clientes.php", true);
    xhr.send();



  }

}