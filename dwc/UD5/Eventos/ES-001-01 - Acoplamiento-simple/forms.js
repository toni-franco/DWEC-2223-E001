class MiForm {
    constructor(genero, fname, lname, email, phone, passwd, country) {
        this.genero = genero;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.phone = phone;
        this.passwd = passwd;
        this.country = country;
    }

    rellenar() {       

        if (document.getElementById('mr').value == this.genero) {
            document.getElementById('mr').checked = true;
        }
        if (document.getElementById('mrs').value == this.genero) {
            document.getElementById('mrs').checked = true;
        }
        if (document.getElementById('miss').value == this.genero) {
            document.getElementById('miss').checked = true;
        }
        document.getElementById('fname').value = this.fname;
        document.getElementById('lname').value = this.lname;
        document.getElementById('email').value = this.email;
        document.getElementById('tel').value = this.phone;
        document.getElementById('passwd').value = this.passwd;
        document.getElementById('country').value = this.country;
        document.getElementById('terms').checked = true;
    }

}


ob1 = new MiForm("mr", "Elvis", "Williams", "elviswill@outlook.es", "789512473", "eLvIs8Gw5", "United States");
ob2 = new MiForm("miss", "Gabriela", "Ferreira", "gabriferrei@internxt.eu", "608453167", "Ma%rCo&Rt65E-S", "Brazil");


document.getElementById("aDiv1").addEventListener("click", function(event)
{
  console.log("manejador 1");
  ob1.rellenar();
  event.preventDefault(); 
});
document.getElementById("aDiv2").addEventListener("click", function(event)
{
  console.log("manejador 2");
  ob2.rellenar();  
  event.preventDefault();  
});






