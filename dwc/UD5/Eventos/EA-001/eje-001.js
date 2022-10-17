let subjecte = {
    observadorsRegistrats: [],
  
    registrarObservador: function(observador) {
      this.observadorsRegistrats.push(observador);
    },
  
    desregistrarObservador: function(observador) {
      let index = this.observadorsRegistrats.indexOf(observador);
      this.observadorsRegistrats.splice(index, 1);
    },
  
    notificaObservadors: function(missatge) {
      console.log("Iniciem la notificació del missatge als observadors");
      for (let i = 0; i < this.observadorsRegistrats.length; i++) {
        this.observadorsRegistrats[i].notificar(missatge);
      }
      console.log("Fi de les notificacions");
    },
  
    saludar: function() {
      this.notificaObservadors('Hola mon');
    }
  }
  
  let observador1 = {
    notificar: function(missatge) {
      console.log("Sóc l'observador 1 i he rebut el missatge: " + missatge);
    }
  }
  
  let observador2 = {
    notificar: function(missatge) {
      console.log("Sóc l'observador 2 i també mostro el missatge : " + missatge);
    }
  }
  
  // Enregistrem els dos observadors al subjecte
  subjecte.registrarObservador(observador1);
  subjecte.registrarObservador(observador2);
  
  // Comprovem que funciona enviant un missatge
  subjecte.saludar();
  
  // Desenregistrem a un observador i tornem a saludar
  subjecte.desregistrarObservador(observador1);
  subjecte.saludar();
  
  // Desenregistrem a un observador i tornem a saludar; com que ja no hi ha més observadors, no farà res
  subjecte.desregistrarObservador(observador2);
  subjecte.saludar();