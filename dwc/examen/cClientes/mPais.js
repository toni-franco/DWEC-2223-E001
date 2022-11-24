
// Pojo Pais
class pPais {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

class mPaises {
  aPaises = new Array();
  constructor() {
    var aPaises = new Array();
    //////console.log("Entra al constructor de mPaises");
    this.CargarPaises();
  }

  getPaises() {
    return aPaises;
  }

  AddPais(pais) {

    //const jsonAEnviar = "json=" + JSON.stringify({user: user, points:points});
    const jsonAEnviar = JSON.stringify(pais);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../ins-paises.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
    } else {
      pais.id = phptext;
      aPaises.push(pais);
    }

  }


  DelPais(num) {
    var pais = aPaises[num];
    const jsonAEnviar = JSON.stringify(pais);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../del-paises.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
    } else {
      //////console.log("Borrado correctamente")
      aPaises.pop(pais);
    }
  }

  Modificar(num, DN) {

    aPaises[num].id = DN.id;
    aPaises[num].nombre = DN.nombre;

    var pais = aPaises[num];

    const jsonAEnviar = JSON.stringify(pais);
    //////console.log(jsonAEnviar);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../mod-paises.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("json=" + jsonAEnviar);
    var phptext = xhr.responseText;
    //////console.log(phptext);
    if (phptext == "Error") {
      //////console.log("Algo no ha funcionado en la BBDD")
    } else {
      pais.id = phptext;
    }
  }

  CargarPaises() {
    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.open("GET", "../get-paises.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //////console.log(this.responseText);
        var paises = JSON.parse(this.responseText);

        for (var i = 0; i < paises.length; i++) {
          var pais = new pPais(paises[i][0], paises[i][1]);
          //////console.log(paises[i][1]);
         aPaises.push(pais);
        }

      }
    }
    //xhr.open("GET", "../get-paises.php", true); // TRUE -> asincrono 
    xhr.open("GET", "../get-paises.php", false); // false -> sincrono !!
    xhr.send();



  }

}
