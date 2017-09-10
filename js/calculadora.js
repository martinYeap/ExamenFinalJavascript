var Calculadora = {};
(function(num1, num2){

  //ATRIBUTOS
  var resultado;

  //METODOS PRIVADOS
  var formatoRespuesta = function(valor){
    console.log(valor);
    valor = valor.toString();
    valor = valor.substr(0, 8);
    return valor;
  };

//METODOS PUBLICOS
  this.getResultado = function(){
    return resultado;
  };

  this.sumar = function (param1, param2){
    resultado = param1 + param2;
    return formatoRespuesta(resultado);
  };

  this.restar = function (param1, param2){
    resultado = param1 - param2;
    return formatoRespuesta(resultado);
  };

  this.multiplicar = function (param1, param2){
    resultado = param1 * param2;
    return formatoRespuesta(resultado);
  };

  this.dividir = function (param1, param2){
    if(param2>0){
      resultado = param1 / param2;
    }else{
      resultado = 'DIVISOR0';
    }
    return formatoRespuesta(resultado);
  };

}).apply(Calculadora);
