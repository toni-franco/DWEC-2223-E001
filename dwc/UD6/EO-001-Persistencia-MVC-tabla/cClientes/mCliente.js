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
    
  //  if (typeof localStorage !== 'undefined') {
  //    this.CargarClientes()
  //  } else {
    
        var ob1 = new pCliente(
          "mr",
          "Elvis",
          "Williams",
          "elviswill@outlook.es",
          "789512473",
          "eLvIs8Gw5",
          "United States"
        );
        aClientes.push(ob1);
        var ob2 = new pCliente(
          "miss",
          "Gabriela",
          "Ferreira",
          "gabriferrei@internxt.eu",
          "608453167",
          "Ma%rCo&Rt65E-S",
          "Brazil"
        );
        aClientes.push(ob2);

   //   }
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
    aClientes = JSON.parse(window.localStorage.getItem("Misclientes"));    
  }

}
