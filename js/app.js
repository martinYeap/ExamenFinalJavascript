//ASIGANCION VARIABLES
  var display = document.getElementById('display');

  //arregloNumeros
  var numeros = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9')
  ];

  //arregloSignos
  var signos = [
    document.getElementById('on'), //0
    document.getElementById('mas'), //1
    document.getElementById('menos'), //2
    document.getElementById('por'), //3
    document.getElementById('dividido'), //4
    document.getElementById('sign'), //5
    document.getElementById('punto'), //6
    document.getElementById('igual') //7
  ];

  //Variables de CONTROL
  var numero1 = 0;
  var numero2 = 0;
  var resultado = 0;
  var valor = "0";
  var operacion = false;
  var tiposigno = 0;
  var digitos = 0;
  var firstDigit = true;
  var signo = true;
  var punto = false;
  var controlTotal = 0;


//FUNCIONES DE LOGICA DE NEGOCIO
var ingresarValor = function(dato){
  if(digitos<=7){
    if(firstDigit == true){
      valor = dato;
      display.innerHTML = valor;
      firstDigit = false;
    }else{
      valor = valor + dato;
      display.innerHTML = valor;
    }
    digitos++;
  }else{
    alert("Solo se pueden ingresar 8 digitos");
  }
};

var asignarSigno = function(){
  if(digitos == 0){
      alert("Al valor cero no se le asigna signo");
    }else{
      if(signo == true){
        valor = "-" + valor;
        display.innerHTML = valor;
        signo = false;
      }else{
        if(punto)
          valor = valor.substr(-digitos-1);
        else
          valor = valor.substr(-digitos);
        display.innerHTML = valor;
        signo = true;
      }
    }
};

var incluirPunto = function(){
    if (digitos == 8) {
      alert("Ya ingresaste 8 digitos no se asignará punto");
    }else{
      if(punto == false){
        if(digitos == 0){
            firstDigit = false;
            digitos++;
            valor = "0.";
          }else
            valor = valor + ".";
        display.innerHTML = valor;
        punto = true;
      }else{
        alert("Ya agregaste un punto");
      }
    }
};

var resetCalculo = function(){
  valor = "0";
  digitos = 0;
  firstDigit = true;
  signo = true;
  punto = false;
};

var postCalculo = function(fun){
  numero1 = resultado;
  display.innerHTML = resultado;
  tiposigno = fun;
};

var resetDatos = function(){
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  valor = "0";
  tiposigno = 0;
  operacion = false;
  digitos = 0;
  firstDigit = true;
  controlTotal = 0;
  signo = true;
  punto = false;
  display.innerHTML = valor;
};

var calcularOperacion = function(funcion){
  if(!operacion){
    numero1 = parseFloat(valor);
    tiposigno = funcion;
    resetCalculo();
    operacion = true;
    display.innerHTML = valor;
  }else{
    if(controlTotal<2)
      numero2 = parseFloat(valor);
    resetCalculo();
    switch (tiposigno) {
      case 1: //Sumar
        resultado = parseFloat(Calculadora.sumar(numero1, numero2));
        postCalculo(funcion);
      break;
      case 2: //Restar
        resultado = parseFloat(Calculadora.restar(numero1, numero2));
        postCalculo(funcion);
      break;
      case 3: //Multiplicar
        resultado = parseFloat(Calculadora.multiplicar(numero1, numero2));
        postCalculo(funcion);
      break;
      case 4: //Dividir
          if(numero2>0){
            resultado = parseFloat(Calculadora.dividir(numero1, numero2));
            postCalculo(funcion);
          }else{
            display.innerHTML = "DIVISOR0";
            alert("Error de division por 0");
            resetCalculo();
          }
      break;
    }
  }
};

//FUNCION DE INGRESO DE DATOS
numeros[0].onclick = function(){
  if(valor == "0"){
    display.innerHTML = valor;
  }else{
    valor = valor + "0";
    display.innerHTML = valor;
  }
};
numeros[1].onclick = function(){
    ingresarValor("1");
};
numeros[2].onclick = function(){
    ingresarValor("2");
};
numeros[3].onclick = function(){
    ingresarValor("3");
};
numeros[4].onclick = function(){
    ingresarValor("4");
};
numeros[5].onclick = function(){
    ingresarValor("5");
};
numeros[6].onclick = function(){
    ingresarValor("6");
};
numeros[7].onclick = function(){
    ingresarValor("7");
};
numeros[8].onclick = function(){
    ingresarValor("8");
};
numeros[9].onclick = function(){
    ingresarValor("9");
};


//FUNCION TECLAS DE CONTROL
//ON
signos[0].onclick = function(){
    resetDatos();
};
//SUMAR
signos[1].onclick = function(){
    controlTotal=0;
    calcularOperacion(1);
};
//RESTAR
signos[2].onclick = function(){
    controlTotal=0;
    calcularOperacion(2);
};
//MULTIPLICAR
signos[3].onclick = function(){
    controlTotal=0;
    calcularOperacion(3);
};
//DIVIDIR
signos[4].onclick = function(){
    controlTotal=0;
    calcularOperacion(4);
};
//SIGNO
signos[5].onclick = function(){
    asignarSigno();
};
//PUNTO
signos[6].onclick = function(){
    incluirPunto();
};
//TOTAL
signos[7].onclick = function(){
    controlTotal++;
    calcularOperacion(tiposigno);
};
