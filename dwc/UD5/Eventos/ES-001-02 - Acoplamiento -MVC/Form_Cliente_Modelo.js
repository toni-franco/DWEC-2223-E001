
var aClientes=[];


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

class DatosClientes{
    constructor() {
        var ob1 = new pCliente("mr", "Elvis", "Williams", "elviswill@outlook.es", "789512473", "eLvIs8Gw5", "United States");
        aClientes.push(ob1);
        var ob2 = new pCliente("miss", "Gabriela", "Ferreira", "gabriferrei@internxt.eu", "608453167", "Ma%rCo&Rt65E-S", "Brazil");
        aClientes.push(ob2);
        return aClientes;
    }

}