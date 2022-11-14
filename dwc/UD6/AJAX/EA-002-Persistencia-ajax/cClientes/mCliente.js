
// Pojo Cliente
class pCliente {
  constructor(id,genero, fname, lname, email, phone, passwd, country) {
    this.id=id;
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
  constructor() {  }

  getClientes(){     
     return aClientes;
  }

  AddCliente(cliente) {
    //aClientes.push(cliente);

    //const jsonAEnviar = "json=" + JSON.stringify({user: user, points:points});
    const jsonAEnviar = "json=" + JSON.stringify(cliente);
   // console.log(jsonAEnviar);
   
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../ins-clientes.php",false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var aaa="";
    /*
    xhr.onreadystatechange=function()
        {
        if (xhr.readyState==4 && xhr.status==200)
          {
          aaa=xhr.responseText;
          console.log(aaa);
          }
        }
   
    */  

    xhr.send(jsonAEnviar );
    var Estado=xhr.responseText;
    //console.log(aaa);
    if (Estado ==="Error")
        alert("Error al insertar");
    else{
      cliente.id=Estado;
      aClientes.push(cliente);
      ctlCliente.Refresh(aClientes.length-1);
    }
       

   //  this.GuardaClientes();
  }

  DelCliente(numElemArray) {
    

    //const jsonAEnviar = "json=" + JSON.stringify({user: user, points:points});
    const jsonAEnviar = "json=" + JSON.stringify(aClientes[numElemArray]);
    console.log(jsonAEnviar);
   
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../del-clientes.php",false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var aaa="";


    xhr.send(jsonAEnviar);
    var Estado=xhr.responseText;
    //console.log(aaa);
    if (Estado ==="Error")
        alert("Error al eliminar");
    else{
      
      aClientes.splice(numElemArray,1);
      ctlCliente.Refresh(numElemArray);
    }
    
  }



  Modificar(num, DN) {

  
  const jsonAEnviar = "json=" + JSON.stringify(DN);
  console.log(jsonAEnviar);
 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../mod-clientes.php",false);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var aaa="";


  xhr.send(jsonAEnviar);
  var Estado=xhr.responseText;
  //console.log(aaa);
  if (Estado ==="Error")
      alert("Error al eliminar");
  else{
    
    aClientes[num].genero = DN.genero;
    aClientes[num].fname = DN.fname;
    aClientes[num].lname = DN.lname;
    aClientes[num].email = DN.email;
    aClientes[num].phone = DN.phone;
    aClientes[num].passwd = DN.passwd;
    aClientes[num].country = DN.country;
  }  
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

            for (var i =0; i<clientes.length;i++){ 
              var cliente= new pCliente(clientes[i][0],clientes[i][1],clientes[i][2],clientes[i][3],clientes[i][4],clientes[i][5],clientes[i][6],clientes[i][7]);
              aClientes.push(cliente);
            }
            
        }
    }
   
    //xhr.open("GET", "../get-clientes.php", true); // TRUE -> asincrono 
    xhr.open("GET", "../get-clientes.php", false); // false -> sincrono !!
    xhr.send();



  }

}
