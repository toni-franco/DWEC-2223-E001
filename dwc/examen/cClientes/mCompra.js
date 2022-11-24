
// Pojo Compra
class pCompra {
  constructor(id, idCliente, cantidad, Descripción, Precio, Foto) {
    this.id = id;
    this.idCliente = idCliente;
    this.cantidad = cantidad;
    this.Descripción = Descripción;
    this.Precio = Precio;
    this.Foto = Foto;
  }
}

class mCompras {
  aCompras = new Array();
  compra = "";
  constructor() {
  }

  getCompras() {
    this.aCompras = this.CargarCompras();
    return this.aCompras;
  }
  getComprasDeCliente(idClienteU) {
    var aComprasCliente = new Array();
    for (var i = 0; i < this.aCompras.length; i++) {
      //console.log("hola");
      if (this.aCompras[i].idCliente == idClienteU) {
        //console.log("aceptado");
        aComprasCliente.push(aCompras[i]);
      }
    }
    return aComprasCliente;
  }

  getComprasDeClienteRed(idClienteU) {
    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.open("GET", "../get-compra.php?id="+idClienteU, false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //////console.log(this.responseText);
        var compras = JSON.parse(this.responseText);
        aCompras = [];
        for (var i = 0; i < compras.length; i++) {
          var compra = new pCompra(compras[i][0], compras[i][1], compras[i][2], compras[i][3], compras[i][4], compras[i][5], compras[i][6]);
          aCompras.push(compra);
        }

      }
    }
    //xhr.open("GET", "../get-compras.php", true); // TRUE -> asincrono 
    xhr.open("GET", "../get-compras.php", false); // false -> sincrono !!
    xhr.send();
    return aCompras;

  }



  AddCompra(compra) {

    //const jsonAEnviar = "json=" + JSON.stringify({user: user, points:points});
    const jsonAEnviar = JSON.stringify(compra);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../ins-compras.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
    } else {
      compra.id = phptext;
      aCompras.push(compra);
    }

  }


  DelCompra(num) {
    var compra = aCompras[num];
    const jsonAEnviar = JSON.stringify(compra);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../del-compras.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
      return "Error";
    } else {
      //////console.log("Borrado correctamente")
      this.aCompras.pop(compra);
      return "1";
    }
  }

  Modificar(num, DN) {

    aCompras[num].id = DN.id;
    aCompras[num].idCliente = DN.idCliente;
    aCompras[num].cantidad = DN.cantidad;
    aCompras[num].Descripción = DN.Descripción;
    aCompras[num].Precio = DN.Precio;
    aCompras[num].Foto = DN.Foto;

    var compra = aCompras[num];

    const jsonAEnviar = JSON.stringify(compra);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../mod-compras.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
    } else {
      compra.id = phptext;
    }
  }

  CargarCompras() {
    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.open("GET", "../get-compras.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //////console.log(this.responseText);
        var compras = JSON.parse(this.responseText);
        aCompras = [];
        for (var i = 0; i < compras.length; i++) {
          var compra = new pCompra(compras[i][0], compras[i][1], compras[i][2], compras[i][3], compras[i][4], compras[i][5], compras[i][6]);
          aCompras.push(compra);
        }

      }
    }
    //xhr.open("GET", "../get-compras.php", true); // TRUE -> asincrono 
    xhr.open("GET", "../get-compras.php", false); // false -> sincrono !!
    xhr.send();
    return aCompras;


  }

  BuscarCompra(id, nombre, apellido) {

    for (var i = 0; i < aCompras.length; i++) {
      //if(id==aCompras[i].id && nombre==aCompras[i].fname && apellido==aCompras[i].lname){
      if (id == aCompras[i].id || nombre == aCompras[i].fname || apellido == aCompras[i].lname) {
        var encontrado = id + " " + nombre + " " + apellido;
        return i;
      }
    }
    //Guarda el compra
    if (encontrado == null) {
      alert("No se encontró");
    }
  }


}
