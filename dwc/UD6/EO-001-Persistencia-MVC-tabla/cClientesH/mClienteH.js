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

class mClientesH {
  constructor() {
    
  //  if (typeof localStorage !== 'undefined') {
      this.CargarClientes()
  //  } else {
    
 
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
