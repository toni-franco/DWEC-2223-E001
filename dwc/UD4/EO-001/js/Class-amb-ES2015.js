///////////////////////////////////////////////////////////////
// Definimos la clase vehiculo

class vehiculo {
  constructor(marca, modelo, color, fabricacion, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.fabricacion = fabricacion;
    this.cilindrada = cilindrada;
    this.kilometros = 15;
  }
  acelerar() {
    this.kilometros = this.kilometros + 15;
    if (this.kilometros < 0) {
      this.kilometros = 0;
    }
    document.write("Se acelera KILOMETROS: " + this.kilometros + "<br>");
  }
  frenar() {
    this.kilometros = this.kilometros - 15;
    if (this.kilometros < 0) {
      this.kilometros = 0;
    }
    document.write("Se frena KILOMETROS: " + this.kilometros + "<br>");
  }
  mostrarDatos() {
    document.write(
      "MARCA: " +
      this.marca +
      " MODELO: " +
      this.modelo +
      " COLOR: " +
      this.color +
      " FABRICACIÓN: " +
      this.fabricacion +
      " CILINDRADA: " +
      this.cilindrada
    );
   
  }
}

/////////////////////
///// HERENCIA //////
/////////////////////

class Todoterreno extends vehiculo {

  constructor(marca, modelo, color, fabricacion, cilindrada, traccion) {
      super(marca, modelo, color, fabricacion, cilindrada);
      this.traccion = traccion;
  }
  /*
  get traccion(){
      return this.traccion;
  }
  set traccion(traccion){    
    this.traccion=traccion;
  }
  */
  mostrarDatos() {
    super.mostrarDatos();
    document.write(" TRACCIÓN: " + this.traccion+"<br>");
  }

}

class furgoneta  extends vehiculo  {
  constructor(marca, modelo, color, fabricacion, cilindrada,pasajeros) {
    super(marca, modelo, color, fabricacion, cilindrada);
    this._pasajeros = pasajeros;
  }
  get pajaseros(){
    return this._pasajeros;
  }
  set pajaseros(pasajeros){
    this._pajaseros=pasajeros;
  }

  mostrarDatos() {
    super.mostrarDatos();
    document.write(" PASAJEROS: " + this._pasajeros+"<br>");
  }
}  
