///////////////////////////////////////////////////////////////
// Definimos la clase vehiculo
function vehiculo(marca, modelo, color, fabricacion, cilindrada) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.fabricacion = fabricacion;
  this.cilindrada = cilindrada;
  this.kilometros = 15;
}

vehiculo.prototype.acelerar = function () {
  this.kilometros = this.kilometros + 15;
  if (this.kilometros < 0) {
    this.kilometros = 0;
  }
  document.write("Se acelera KILOMETROS: " + this.kilometros + "<br>");
};

vehiculo.prototype.frenar = function () {
  this.kilometros = this.kilometros - 15;
  if (this.kilometros < 0) {
    this.kilometros = 0;
  }
  document.write("Se frena KILOMETROS: " + this.kilometros + "<br>");
};


vehiculo.prototype.mostrarDatos2 = function () {
  document.write(
    "<br>Marca = " +
      this.marca +
      "<br>Modelo = " +
      this.modelo +
      "<br>Color = " +
      this.color +
      "<br>Fabricacion = " +
      this.fabricacion +
      "<br>Cilindrada = " +
      this.cilindrada +
      "<br>"
  );
 
};
/////////////////////////////////////////////



// PseudoClase que hereda de vehiculo
function furgoneta(marca, modelo, color, fabricacion, cilindrada, pasajeros) {
  vehiculo.call(this, marca, modelo, color, fabricacion, cilindrada);
  this.pasajeros = pasajeros;

  this.mostrarDatos= function(){
    this.mostrarDatos2();
    document.write("Pasajeros: " +this.pajaseros+"<br>");
  }

}

// Añade al prototipo que hereda de vehiculo()
furgoneta.prototype = new vehiculo();

// Estabece el constructor de furgoneta()
furgoneta.prototype.constructor = furgoneta;

// PseudoClase que hereda de vehiculo
function Todoterreno(marca, modelo, color, fabricacion, cilindrada, traccion) {
  vehiculo.call(this, marca, modelo, color, fabricacion, cilindrada);
  this.traccion = traccion;

  this.mostrarDatos = function () {
    this.mostrarDatos2();
    document.write("Traccion: " + this.traccion + "<br>");
  };
}

// Añade al prototipo que hereda de vehiculo()
Todoterreno.prototype = new vehiculo();
// Estabece el constructor de todoterreno()
Todoterreno.prototype.constructor = Todoterreno;
