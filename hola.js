// cambia de color por cada una
//function cambiarColor() {

//     var etiqueta = document.getElementById('col');
//     // Verificamos si la etiqueta tiene el color de fondo rojo actualmente
//     if (etiqueta.style.backgroundColor !== 'red') {
//       // Si no tiene color de fondo rojo, lo establecemos
//       etiqueta.style.backgroundColor = 'red';
//     } else {
//       // Si ya tiene color de fondo rojo, lo quitamos
//       etiqueta.style.backgroundColor = '';
//     }
//   }
function cambiarColor(id) {
    const etiqueta = document.getElementById(id);
    // Verificamos si la etiqueta tiene el color de fondo rojo actualmente
    if (etiqueta.style.backgroundColor !== '#a450bd') {
      // Si no tiene color de fondo rojo, lo establecemos
      etiqueta.style.backgroundColor = '#a450bd';
    } else {
      // Si ya tiene color de fondo rojo, lo quitamos
      etiqueta.style.backgroundColor = '';
    }
  }
  //N
  function obtenerNombreTipoVidrioN() {
    var tipoVidrioSelectN = document.getElementById('tipoTrabajo');
    var tipoVidrioOptionN = tipoVidrioSelectN.options[tipoVidrioSelectN.selectedIndex];
    return tipoVidrioOptionN.getAttribute('data-nombre');
}
//1 Name
  function obtenerNombreTipoVidrio() {
    var tipoVidrioSelect = document.getElementById('tipoVidrio');
    var tipoVidrioOption = tipoVidrioSelect.options[tipoVidrioSelect.selectedIndex];
    return tipoVidrioOption.getAttribute('data-nombre');
}
//2 Name
function obtenerNombreTipo2() {
  var tipo2 = document.getElementById('chapa');
  var tipoOption2 = tipo2.options[tipo2.selectedIndex];
  return tipoOption2.getAttribute('data-nombre');
}
//3 Name
function obtenerNombreTipo3() {
  var tipo3 = document.getElementById('pasador');
  var tipoOption3 = tipo3.options[tipo3.selectedIndex];
  return tipoOption3.getAttribute('data-nombre');
}
//4 Name
function obtenerNombreTipo4() {
  var tipo4 = document.getElementById('goma');
  var tipoOption4 = tipo4.options[tipo4.selectedIndex];
  return tipoOption4.getAttribute('data-nombre');
}
//5 Name
function obtenerNombreTipo5() {
  var tipo5 = document.getElementById('sA');
  var tipoOption5 = tipo5.options[tipo5.selectedIndex];
  return tipoOption5.getAttribute('data-nombre');
}
//6 Name
function obtenerNombreTipo6() {
  var tipo6 = document.getElementById('pfAbajo');
  var tipoOption6 = tipo6.options[tipo6.selectedIndex];
  return tipoOption6.getAttribute('data-nombre');
}
//7 Name
function obtenerNombreTipo7() {
  var tipo7 = document.getElementById('manijas');
  var tipoOption7 = tipo7.options[tipo7.selectedIndex];
  return tipoOption7.getAttribute('data-nombre');
}
//8 Name
function obtenerNombreTipo8() {
  var tipo8 = document.getElementById('bisagras');
  var tipoOption8 = tipo8.options[tipo8.selectedIndex];
  return tipoOption8.getAttribute('data-nombre');
}
//9 Name
function obtenerNombreTipo9() {
  var tipo9 = document.getElementById('chapetas');
  var tipoOption9 = tipo9.options[tipo9.selectedIndex];
  return tipoOption9.getAttribute('data-nombre');
}
//10 Name
function obtenerNombreTipo10() {
  var tipo10 = document.getElementById('puntosFijos');
  var tipoOption10 = tipo10.options[tipo10.selectedIndex];
  return tipoOption10.getAttribute('data-nombre');
}
//11 Name
function obtenerNombreTipo11() {
  var tipo11 = document.getElementById('poste');
  var tipoOption11 = tipo11.options[tipo11.selectedIndex];
  return tipoOption11.getAttribute('data-nombre');
}
//12 Name
function obtenerNombreTipo12() {
  var tipo12 = document.getElementById('otros');
  var tipoOption12 = tipo12.options[tipo12.selectedIndex];
  return tipoOption12.getAttribute('data-nombre');
}

//13 Name
function obtenerNombreTipo13() {
  var tipo13 = document.getElementById('zocalo');
  var tipoOption13 = tipo13.options[tipo13.selectedIndex];
  return tipoOption13.getAttribute('data-nombre');
}
//14 Name
function obtenerNombreTipo14() {
  var tipo14 = document.getElementById('color');
  var tipoOption14 = tipo14.options[tipo14.selectedIndex];
  return tipoOption14.getAttribute('data-nombre');
}

//15 Name
function obtenerNombreTipo15() {
  var tipo15 = document.getElementById('kits');
  var tipoOption15 = tipo15.options[tipo15.selectedIndex];
  return tipoOption15.getAttribute('data-nombre');
}
//16 Name
// function obtenerNombreTipo16() {
//   var tipo16 = document.getElementById('perfilF');
//   var tipoOption16 = tipo16.options[tipo16.selectedIndex];
//   return tipoOption16.getAttribute('data-nombre');
// }

//17 Name
function obtenerNombreTipo17() {
  var tipo17 = document.getElementById('tipoAccesorios');
  var tipoOption17 = tipo17.options[tipo17.selectedIndex];
  return tipoOption17.getAttribute('data-nombre');
}

// function obtenerNombreTipo18() {
//   var tipo18 = document.getElementById('Marco');
//   var tipoOption18 = tipo18.options[tipo18.selectedIndex];
//   return tipoOption18.getAttribute('data-nombre');
// }



// Declarar la variable total fuera de cualquier función para que sea accesible globalmente
var total = 0;

function calcularValor() {
  var alto = parseFloat(document.getElementById('alto').value);
  var ancho = parseFloat(document.getElementById('ancho').value);
  var area = alto * ancho;

    // Calcular el área del vidrio
  
   
    // Obtener el valor del tipo de vidrio seleccionado
    var tipoVidrio = parseFloat(document.getElementById('tipoVidrio').value);

    // Obtener el valor de los accesorios seleccionados
    var chapa = parseFloat(document.getElementById('chapa').value);
    var pasador = parseFloat(document.getElementById('pasador').value);
    var goma = parseFloat(document.getElementById('goma').value);
    var sA = parseFloat(document.getElementById('sA').value);
    var pfAbajo = parseFloat(document.getElementById('pfAbajo').value);
    var manijas = parseFloat(document.getElementById('manijas').value);
    var bisagras = parseFloat(document.getElementById('bisagras').value);
    var chapetas = parseFloat(document.getElementById('chapetas').value);
    var puntosFijos = parseFloat(document.getElementById('puntosFijos').value);
    var poste = parseFloat(document.getElementById('poste').value);
    var otros = parseFloat(document.getElementById('otros').value);
    var zocalo = parseFloat(document.getElementById('zocalo').value);
    var color = parseFloat(document.getElementById('color').value);
    var kits = parseFloat(document.getElementById('kits').value);
    var Marco = parseFloat(document.getElementById('Marco').value);
    var MarcoI = parseFloat(document.getElementById('MarcoI').value);
     //elige el precio
    var adicional = parseFloat(document.getElementById('adicional').value);
    
    //calcular metro lineal de poste
    var mlPerfilAbajo = pfAbajo * ancho;
    var mlPoste = alto * poste;
    var mlZocalo = ancho * zocalo;
    var m2Pelicula = area * color;
   
   

    //calcula la cantidad de veces
    var cantidadChapa = parseFloat(document.getElementById('cantidadChapa').value);
    var cantidadPasador = parseFloat(document.getElementById('cantidadPasador').value);
    var cantidadPfb = parseFloat(document.getElementById('cantidadPfb').value);
    var cantidadSa = parseFloat(document.getElementById('cantidadSa').value);
    var cantidadpfAbajo = parseFloat(document.getElementById('cantidadpfAbajo').value);
    var cantidadManijas = parseFloat(document.getElementById('cantidadManijas').value);
    var cantidadBisagras = parseFloat(document.getElementById('cantidadBisagras').value);
    var cantidadChapetas = parseFloat(document.getElementById('cantidadChapetas').value);
    var cantidadPuntosFijos = parseFloat(document.getElementById('cantidadPuntosFijos').value);
    var cantidadPoste = parseFloat(document.getElementById('cantidadPoste').value);
    var cantidadOtros = parseFloat(document.getElementById('cantidadOtros').value);
    var Rodamientos = parseFloat(document.getElementById('Rodamientos').value);

    var cantidadMarco = parseFloat(document.getElementById('cantidadMarco').value);
    var cantidadMarcoI = parseFloat(document.getElementById('cantidadMarcoI').value);
    
    var cantidadZocalo = parseFloat(document.getElementById('cantidadZocalo').value);
    

    var mlMarcoS = alto * cantidadMarco;
    var mlMarcoI = ancho * cantidadMarcoI;
    // Calcular el total sumando el valor del vidrio y los accesorios
    total = 
   (area * tipoVidrio) + (chapa * cantidadChapa) + (pasador * cantidadPasador) + 
   (goma * cantidadPfb ) + (sA * cantidadSa) + (mlPerfilAbajo * cantidadpfAbajo) + 
   (manijas * cantidadManijas ) + (bisagras * cantidadBisagras) + (chapetas * cantidadChapetas) +
   (puntosFijos * cantidadPuntosFijos) + (mlPoste * cantidadPoste) + (cantidadOtros * otros) + 
   ( mlZocalo * cantidadZocalo )+ m2Pelicula + (kits + Rodamientos) + adicional + (mlMarcoS * Marco) + (mlMarcoI * MarcoI) ;


    //nombres 
    var nombreTipoVidrioN = obtenerNombreTipoVidrioN();
    var nombreTipoVidrio = obtenerNombreTipoVidrio();
    
    var nombreChapetas = obtenerNombreTipo9()
    var nombrePoste = obtenerNombreTipo11()
    
    var nombreZocalo = obtenerNombreTipo13()
    var nombrePfAbajo = obtenerNombreTipo6()
    
    var nombreChapa = obtenerNombreTipo2()

    var nombrePasador = obtenerNombreTipo3()
    var nombrePfb = obtenerNombreTipo4()
    var nombreManijas = obtenerNombreTipo7()
    var nombreBisagras = obtenerNombreTipo8()
    var nombrePuntosFijos = obtenerNombreTipo10()
    var nombreOtros = obtenerNombreTipo12()
    var nombreColor = obtenerNombreTipo14()
    var nombreKits = obtenerNombreTipo15()
    
    var nombreAccesorios = obtenerNombreTipo17()
    var nombreSa = obtenerNombreTipo5()

   // var nombrePerfilF = obtenerNombreTipo16()

    // Mostrar el resultado en el HTML
    console.log(nombrePasador)
    var resultado = "El COSTO ES: $" + total.toFixed(2) + "<br>";
    resultado += "<br>" + "FABRICACION E INSTALACION DE " + nombreTipoVidrioN + " INCLUYE" ;
    resultado +=  " " +  nombreChapetas + ", "+ nombrePoste + ", " + nombreZocalo +", "
    + nombrePasador  + ", " + nombrePfb  + ", " + nombrePfAbajo + ", " + nombreManijas + ", " + nombreBisagras + ", " 
    + nombreChapa + ", "  + nombrePuntosFijos + ", "  + nombreOtros + ", " +   nombreColor + ", " + nombreKits + ", " + "TODOS LOS ACCESORIOS VIENEN EN " 
    + nombreAccesorios + ", " + "EL " + nombreTipoVidrio  +  ". " + nombreSa + ". INCLUYE ENVIO"/*+ nombrePerfilF*/;


    document.getElementById('resultado').innerHTML = resultado;
   // document.getElementById('resultado').innerText = "El costo total es: $" + total.toFixed(2); // esto es para los pesos
};

function mostrarImagenDepend() {
  // Obtener el valor seleccionado en el formulario
  var opcionSeleccionada = document.getElementById("tipoTrabajo").value;
  var imagen = document.getElementById("imagen");

  // Mostrar la imagen correspondiente a la opción seleccionada
  switch (opcionSeleccionada) {
      case "opcion1":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTAS-DE-VIDRIO-PARA-OFICINAS-825x1030.png";
          break;
      case "opcion2":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTA-DE-VIDRIO-PARA-EXTERIORES-710x1030.png";
          break;
      case "opcion3":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTA-DE-VIDRIO-CON-MARCO-EN-ALUMINIO-651x1030.png";
          break;
      case "opcion4":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTA-DE-VIDRIO-PARA-HOSPITALES-902x1030.png";
          break;
     case "opcion5":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/FACHADAS-DE-VIDRIO-PARA-CONJUNTOS-RESIDENCIALES-1030x772.png";
          break;
          case "opcion6":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-VIDRIO-CORREDERA-1-578x1030.png";
          break; 

          case "opcion7":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-BANO-EN-ALUMINIO-Y-VIDRIO-1-773x1030.png";
          break;
          case "opcion8":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-BANO-CON-PUERTA-PLEGABLE-1-733x1030.png";
          break;
          case "opcion9":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/FACHADA-DE-VIDRIO-6-1030x579.png";
          break;
          case "opcion10":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/FACHADAS-DE-LUJO-EN-VIDRIO-PARA-CUALQUIER-LUGAR-5-772x1030.png";
          break;
          case "opcion11":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/FACHADA-EN-VIDRIO-PARA-LOCALES-COMERCIALES-6-1030x772.png";
          break;
          case "opcion12":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTAS-DE-VIDRIO-PARA-INTERIORES-CON-VENTANA-DE-DOMICILIOS-3-772x1030.png";
          break;

          case "opcion3.1":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTAS-DE-ALUMINIO-Y-VIDRIO-9-670x1030.png";
          break;

          case "opcion13":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-BANO-DE-LUJO-1-736x1030.png";
          break;
          case "opcion14":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/PUERTA-DE-BANO-DE-LUJO-1-772x1030.png";
          break;
          case "opcion15":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-BANO-BATIENTE-1-773x1030.png";
          break;
          case "opcion16":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-BANO-CON-PUERTA-PLEGABLE-1-733x1030.png";
          break;
          case "opcion17":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISION-DE-OFICINA-MODERNA-EN-VIDRIO-TEMPLADO-1-982x1030.png";
          break;
          case "opcion18":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
          break;
          case "opcion19":
           imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
        break;
      case "opcion18":
        imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
        break;
        case "opcion18":
        imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
        break;
        case "opcion18":
        imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
        break;
        case "opcion18":
          imagen.src = "https://teslaarquitectura.com/wp-content/uploads/2024/01/DIVISIONES-DE-VIDRIO-PARA-OFICINA-CON-LOGO-1-681x1030.png";
         break;

      default:
          // En caso de no haber ninguna opción seleccionada, ocultar la imagen
          imagen.style.display = "none";
          return;
  }

  // Mostrar la imagen
  imagen.style.display = "flex";
  imagen.style.width = "250px";
  imagen.style.justifyContent ="center";
}


 var valorConPorcentaje = 0;

function aplicarPorcentaje() {
  // Obtener el valor del porcentaje ingresado por el usuario
  var porcentaje = parseFloat(document.getElementById('porcentaje').value);

  // Verificar que el porcentaje sea válido
  if (isNaN(porcentaje) || porcentaje < 0) {
      alert("Porcentaje inválido. Por favor, ingrese un valor numérico positivo.");
      return;
  }

  // Calcular el valor total multiplicado por el porcentaje
  valorConPorcentaje = total * (1 + porcentaje / 100);

  // Mostrar el resultado en el HTML
  document.getElementById('resultadoPorcentaje').innerText = "El valor total con la utilidad aplicado es: $" + valorConPorcentaje.toFixed(2);
};

var totalInstalacion = 0;

function calcularInta(){
  var alto = parseFloat(document.getElementById('alto').value);
  var ancho = parseFloat(document.getElementById('ancho').value);
    var areaI = alto * ancho;
    var instalacion = parseFloat(document.getElementById('instalacion').value);
    totalInstalacion = areaI * instalacion ;

    document.getElementById('resultadoI').innerText = "La instalacion Total es: $" + totalInstalacion;//.toFixed(2) esto es para los pesos

};

function calcularTotal(){
 
 var trans = parseFloat(document.getElementById('transporte').value);
    var totalTransporte = trans + totalInstalacion +valorConPorcentaje;

    document.getElementById('VTV').innerText = "El valor del servicio Total es: $" + totalTransporte ;//.toFixed(2) esto es para los pesos

};

function calcularCostoE(){
  var alto = parseFloat(document.getElementById('alto').value);
  var ancho = parseFloat(document.getElementById('ancho').value);
    let areaC = alto * ancho;



let CA = parseFloat(document.getElementById('CostoAdicional').value)
console.log(CA)

    //2PUERTASY2FIJOS o 1PUERTAYUNFIJO (PARA DIFERENTE CALIBRE)
var costoAnchoDosFijos = {
  anchoPuerta: ancho / 2,
  anchoFijo: ancho /2,
};

 //vidrios
 var vidrio6mm = parseFloat(document.getElementById('vidrio6mm').value);
var vidrio8mm = parseFloat(document.getElementById('vidrio8mm').value);
var vidrio10mm = parseFloat(document.getElementById('vidrio10mm').value);
 var vidrio5_5mm = parseFloat(document.getElementById('vidrio5_5mm').value);

//costo de vidrio
var costoDeVidrio6mm = areaC * vidrio6mm; 
var costoDeVidrio8mm = areaC * vidrio8mm; 
var costoDeVidrio10mm = areaC * vidrio10mm; 

//laminado
var costoDeVidrio5_5mm = areaC * vidrio5_5mm; 


//aluminio
  var chapaDA = parseFloat(document.getElementById('chapaDA').value);
  var manijaA40cm = parseFloat(document.getElementById('manijaA40cm').value);
  var manijaA60cm = parseFloat(document.getElementById('manijaA60cm').value);
  var chapetasDeA = parseFloat(document.getElementById('chapetasDeA').value);

//acero
var chapaDAcero = parseFloat(document.getElementById('chapaDAcero').value);
var manijaAcero40cm = parseFloat(document.getElementById('manijaAcero40cm').value);
var manijaAcero60cm = parseFloat(document.getElementById('manijaAcero60cm').value);
var manijaAcero1M = parseFloat(document.getElementById('manijaAcero1M').value);

var chapetasDeAcero = parseFloat(document.getElementById('chapetasDeAcero').value);

var posteDeGiro = parseFloat(document.getElementById('posteDeGiro').value);
var posteDeGiroC = alto * posteDeGiro;

//otros
var bisagrasDeMuro = parseFloat(document.getElementById('bisagrasDeMuro').value);
var pasadorSobrePoner = parseFloat(document.getElementById('pasadorSobrePoner').value);
var pasadorDePiso = parseFloat(document.getElementById('pasadorDePiso').value);
var perfilF = parseFloat(document.getElementById('perfilF').value);
var puntosFijosPequeños = parseFloat(document.getElementById('puntosFijosPequeños').value);

//bisagrashidraulicas
var bisagraSpeedy = parseFloat(document.getElementById('bHSpeedy').value);
var bisagraEstandar = parseFloat(document.getElementById('bHEstandar').value);



//kits
var kitPesado = parseFloat(document.getElementById('kitPesado').value);
var costoKitRodamientoP = parseFloat(document.getElementById('costoKitRodamientoP').value);

var kitMediano = parseFloat(document.getElementById('kitMediano').value);
var costoKitRodamientoM = parseFloat(document.getElementById('costoKitRodamientoM').value);

//Sistemas automaticos
var SA2 = parseFloat(document.getElementById('SA2').value);
var SA3 = parseFloat(document.getElementById('SA3').value);
var SA4 = parseFloat(document.getElementById('SA4').value);
var SA6 = parseFloat(document.getElementById('SA6').value);



//marcos
var marcoPg_ = parseFloat(document.getElementById('marcoPg_').value);
var marcoPg = parseFloat(document.getElementById('marcoPg').value);

//calculos
//puerta 1 hoja *
var puertaDe6mmSencilla = costoDeVidrio6mm + pasadorSobrePoner + manijaA40cm +(2 * bisagrasDeMuro) + CA;

var puertaDe8mmConAluminio = costoDeVidrio8mm + manijaA40cm + (2 * chapetasDeA) + CA;
var puertaDe8mmConAluminioBh = costoDeVidrio8mm + manijaA40cm + (2 * chapetasDeA) + bisagraEstandar + CA;
var puertaDe8mmConAluminioBhSpeedy = costoDeVidrio8mm + manijaA40cm + (2 * chapetasDeA) + bisagraSpeedy + CA;
  var puertaDe8mmConAluminioChapa = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + CA;
  var puertaDe8mmConAluminioChapaBh = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + bisagraEstandar + CA;
  var puertaDe8mmConAluminioBhSpeedy = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + bisagraSpeedy + CA;

  var puertaDe8mmConAcero = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + CA;
  var puertaDe8mmConAceroBh = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraEstandar + CA;
  var puertaDe8mmConAceroBhSpeedy  = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraSpeedy+ CA;
  var puertaDe8mmConAceroChapa = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + CA;
  var puertaDe8mmConAceroChapaBh = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraEstandar +CA;
  var puertaDe8mmConAceroChapaBhSpeedy = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraSpeedy +CA;

  var puertaDe10mmConAluminio = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + CA;
  var puertaDe10mmConAluminioBh = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + bisagraEstandar + CA;
  var puertaDe10mmConAluminioBhSpeedy = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + bisagraSpeedy + CA;
  var puertaDe10mmConAluminioChapa = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + CA;
  var puertaDe10mmConAluminioChapaBh = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + bisagraEstandar +CA;
  var puertaDe10mmConAluminioChapaBhSpeedy = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + bisagraSpeedy +CA;

  var puertaDe10mmConAcero = costoDeVidrio10mm + manijaAcero40cm + (2 * chapetasDeAcero) + CA;
  var puertaDe10mmConAceroBh = costoDeVidrio10mm + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraEstandar + CA;
  var puertaDe10mmConAceroBhSpeedy = costoDeVidrio10mm + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraSpeedy + CA;
  var puertaDe10mmConAceroChapa = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + CA;
  var puertaDe10mmConAceroChapaBh = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraEstandar + CA;
  var puertaDe10mmConAceroChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + bisagraSpeedy + CA;

  var puertaDe10mmConAceroPoste = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + CA;
  var puertaDe10mmConAceroPosteBh = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + bisagraEstandar + CA;
  var puertaDe10mmConAceroPosteBhSpeedy = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + bisagraSpeedy + CA;
  var puertaDe10mmConAceroPosteChapa = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + CA;
  var puertaDe10mmConAceroPosteChapaBh = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + bisagraEstandar + CA;
  var puertaDe10mmConAceroPosteChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + bisagraSpeedy + CA;

  var puertaDe10mmConAceroPosteManija60cm = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + CA;
  var puertaDe10mmConAceroPosteManija60cmBh = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + bisagraEstandar + CA;
  var puertaDe10mmConAceroPosteManija60cmBhSpeedy = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + bisagraSpeedy + CA;
  var puertaDe10mmConAceroPosteChapaManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + CA;
  var puertaDe10mmConAceroPosteChapaBhManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + bisagraEstandar + CA;
  var puertaDe10mmConAceroPosteChapaBhSpeedyManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + bisagraSpeedy + CA;

 //puerta con modulos fijos DEL MISMO VIDRIO

 //perfil ancho
 if ( ancho <= 1) { 
} else ( ancho >= 1);{
  var perfilFc = {
    pf: ancho - 1,
  };
};

//ancho punto fijo acero
let puntosFijosC = 0;
if (ancho <= 2.2) {
  puntosFijosC = puntosFijosPequeños * 4;
} else if (ancho <= 3.2) {
  puntosFijosC = puntosFijosPequeños * 8;
} else if (ancho <= 4.2) {
  puntosFijosC = puntosFijosPequeños * 12;
} else if (ancho <= 5.2) {
  puntosFijosC = puntosFijosPequeños * 16;
}

var puertaDe8mmConAluminioMF = costoDeVidrio8mm  + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + CA;
var puertaDe8mmConAluminioMFBh = costoDeVidrio8mm  + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2)+ bisagraEstandar + CA;
var puertaDe8mmConAluminioMFBhSpeedy = costoDeVidrio8mm  + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2)+ bisagraSpeedy + CA;
var puertaDe8mmConAluminioMFChapa = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + CA;
var puertaDe8mmConAluminioMFChapaBh = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + bisagraEstandar +CA;
var puertaDe8mmConAluminioMFChapaBhSpeedy = costoDeVidrio8mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) +  bisagraSpeedy+CA;

var puertaDe8mmConAceroMF = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC  + CA;
var puertaDe8mmConAceroMFBh = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC+ bisagraEstandar  + CA;
var puertaDe8mmConAceroMFBhSpeedy = costoDeVidrio8mm + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + bisagraSpeedy  + CA;
  var puertaDe8mmConAceroMFChapa = costoDeVidrio8mm + chapaDAcero +  manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC  + CA;
  var puertaDe8mmConAceroMFChapaBh = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + bisagraEstandar + CA;
  var puertaDe8mmConAceroMFChapaBhSpeedy = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + bisagraSpeedy + CA;
  
  var puertaDe10mmConAluminioMF = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + CA;
  var puertaDe10mmConAluminioMFBh = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2)+ bisagraEstandar + CA;
  var puertaDe10mmConAluminioMFBhSpeedy = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2)+ bisagraSpeedy + CA;
  var puertaDe10mmConAluminioMFChapa = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + CA;
  var puertaDe10mmConAluminioMFChapaBh = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + bisagraEstandar + CA;
  var puertaDe10mmConAluminioMFChapaBhSpeedy = costoDeVidrio10mm + chapaDA + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + bisagraSpeedy + CA;

  var puertaDe10mmConAceroMF = costoDeVidrio10mm + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + CA;
  var puertaDe10mmConAceroMFBh = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2)+ bisagraEstandar + CA;
  var puertaDe10mmConAceroMFBhSpeedy = costoDeVidrio10mm + manijaA40cm + (2 * chapetasDeA) + (perfilFc.pf * perfilF * 2) + bisagraSpeedy + CA;
  var puertaDe10mmConAceroMFChapa = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + CA;
   var puertaDe10mmConAceroMFChapaBh = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + bisagraEstandar + CA;
   var puertaDe10mmConAceroMFChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (2 * chapetasDeAcero) + puntosFijosC + bisagraSpeedy + CA;

   var puertaDe10mmConAceroMFPoste = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + puntosFijosC + CA;
   var puertaDe10mmConAceroMFPosteBh = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + puntosFijosC + bisagraEstandar + CA;
   var puertaDe10mmConAceroMFPosteBhSpeedy = costoDeVidrio10mm + manijaAcero40cm + posteDeGiroC + puntosFijosC + bisagraSpeedy + CA;
   var puertaDe10mmConAceroMFPosteChapa = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + puntosFijosC + CA;
   var puertaDe10mmConAceroMFPosteChapaBh = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + puntosFijosC + bisagraEstandar + CA;
   var puertaDe10mmConAceroMFPosteChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + posteDeGiroC + puntosFijosC + bisagraSpeedy + CA;
   
   var puertaDe10mmConAceroMFPosteManija60cm = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + puntosFijosC + CA;
   var puertaDe10mmConAceroMFPosteManija60cmBh = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + puntosFijosC + CA;
   var puertaDe10mmConAceroMFPosteManija60cmBhSpeedy = costoDeVidrio10mm + manijaAcero60cm + posteDeGiroC + puntosFijosC + bisagraSpeedy + CA;
   var puertaDe10mmConAceroMFPosteChapaManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + puntosFijosC + CA;
   var puertaDe10mmConAceroMFPosteChapaBhManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + puntosFijosC + bisagraEstandar + CA;
   var puertaDe10mmConAceroMFPosteChapaBhSpeedyManija60cm = costoDeVidrio10mm + chapaDAcero + manijaAcero60cm + posteDeGiroC + puntosFijosC + bisagraSpeedy + CA;

   
//puertas dos hojas
var puertaDe6mmSencillaDoble = costoDeVidrio6mm + pasadorSobrePoner + pasadorDePiso + manijaA40cm +(4 * bisagrasDeMuro) + CA;

  var puertaDe8mmConAluminioDoble = costoDeVidrio8mm  + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + CA;
  var puertaDe8mmConAluminioDobleBh = costoDeVidrio8mm  + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe8mmConAluminioDobleBhSpeedy = costoDeVidrio8mm  + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + bisagraSpeedy + CA;
  var puertaDe8mmConAluminioDobleChapa = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + CA;
  var puertaDe8mmConAluminioDobleChapaBh = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe8mmConAluminioDobleChapaBhSpeedy = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2 )  + (4 * chapetasDeA) + pasadorDePiso + bisagraSpeedy + CA;

  var puertaDe8mmConAceroDoble = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe8mmConAceroDobleBh = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso+ bisagraEstandar + CA;
  var puertaDe8mmConAceroDobleBhSpeedy = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;
  var puertaDe8mmConAceroDobleChapa = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe8mmConAceroDobleChapaBh = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe8mmConAceroDobleChapaBhSpeedy = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;

  var puertaDe10mmConAluminioDoble = costoDeVidrio10mm + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso + CA;
  var puertaDe10mmConAluminioDobleBh = costoDeVidrio10mm + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso+ bisagraEstandar + CA;
  var puertaDe10mmConAluminioDobleBhSpeedy = costoDeVidrio10mm + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso + bisagraSpeedy + CA;
  var puertaDe10mmConAluminioDobleChapa = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso + CA;
  var puertaDe10mmConAluminioDobleChapaBh = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso + bisagraEstandar + CA;
  var puertaDe10mmConAluminioDobleChapaBhSpeedy = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2 ) + (4 * chapetasDeA)+ pasadorDePiso + bisagraSpeedy + CA;

  var puertaDe10mmConAceroDoble = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe10mmConAceroDobleBh = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso+ bisagraEstandar + CA;
  var puertaDe10mmConAceroDobleBhSpeedy = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;
  var puertaDe10mmConAceroDobleChapa = costoDeVidrio10mm + chapaDAcero +(manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe10mmConAceroDobleChapaBh = costoDeVidrio10mm + chapaDAcero +(manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe10mmConAceroDobleChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero +(manijaAcero40cm * 2) + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;

  var  puertaDe10mmConAceroDoblePoste = costoDeVidrio10mm + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + CA;
  var  puertaDe10mmConAceroDoblePosteBh = costoDeVidrio10mm + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + bisagraEstandar + CA;
  var  puertaDe10mmConAceroDoblePosteBhSpeedy = costoDeVidrio10mm + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + bisagraSpeedy + CA;
  var  puertaDe10mmConAceroDoblePosteChapa = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + CA;
  var  puertaDe10mmConAceroDoblePosteChapaBh = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + bisagraEstandar + CA;
  var  puertaDe10mmConAceroDoblePosteChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + bisagraSpeedy + CA;

  var  puertaDe10mmConAceroDoblePostesBhidraulicaSpeedySAmanija1 = costoDeVidrio10mm  +(manijaAcero1M * 2) + (posteDeGiroC * 2) + pasadorDePiso + bisagraSpeedy + CA;
  /-otros-/
  var  puertaDe5_5mmConAceroDoblePosteChapa = costoDeVidrio5_5mm + chapaDAcero + (manijaAcero60cm * 2) + (posteDeGiroC * 2) + pasadorDePiso + CA;
 
//puerta con modulos abatible
var puertaDe8mmConAluminioMA = costoDeVidrio8mm  + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + CA;
var puertaDe8mmConAluminioMABh = costoDeVidrio8mm  + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + bisagraEstandar+ CA;
var puertaDe8mmConAluminioMABhSpeedy = costoDeVidrio8mm  + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + bisagraSpeedy+ CA;
var puertaDe8mmConAluminioMAChapa = costoDeVidrio8mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + CA;
var puertaDe8mmConAluminioMAChapaBh = costoDeVidrio8mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + bisagraEstandar +CA;
var puertaDe8mmConAluminioMAChapaBhSpeedy = costoDeVidrio8mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso +  bisagraSpeedy+CA;

var puertaDe8mmConAceroMA = costoDeVidrio8mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso  + CA;
var puertaDe8mmConAceroMABh = costoDeVidrio8mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar + CA;
var puertaDe8mmConAceroMABhSpeedy = costoDeVidrio8mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;
  var puertaDe8mmConAceroMAChapa = costoDeVidrio8mm + chapaDAcero +  manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso  + CA;
  var puertaDe8mmConAceroMAChapaBh = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe8mmConAceroMAChapaBhSpeedy = costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;
  
  var puertaDe10mmConAluminioMA = costoDeVidrio10mm + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + CA;
  var puertaDe10mmConAluminioMABh = costoDeVidrio10mm + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso+ bisagraEstandar + CA;
  var puertaDe10mmConAluminioMABhSpeedy = costoDeVidrio10mm + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso+ bisagraSpeedy + CA;
  var puertaDe10mmConAluminioMAChapa = costoDeVidrio10mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + CA;
  var puertaDe10mmConAluminioMAChapaBh = costoDeVidrio10mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe10mmConAluminioMAChapaBhSpeedy = costoDeVidrio10mm + chapaDA + manijaA40cm + (4 * chapetasDeA) + pasadorDePiso + bisagraSpeedy + CA;

  var puertaDe10mmConAceroMA = costoDeVidrio10mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe10mmConAceroMABh = costoDeVidrio10mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar+ CA;
  var puertaDe10mmConAceroMABhSpeedy = costoDeVidrio10mm + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy+ CA;
  var puertaDe10mmConAceroMAChapa = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + CA;
  var puertaDe10mmConAceroMAChapaBh = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraEstandar + CA;
  var puertaDe10mmConAceroMAChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + manijaAcero40cm + (4 * chapetasDeAcero) + pasadorDePiso + bisagraSpeedy + CA;

//puerta doble con modulos fijos
var perfilFcMF = {
    pf: ancho - 2,
  };
var puertaDe8mmConAluminioMFDoble = costoDeVidrio8mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + CA;
var puertaDe8mmConAluminioMFDobleBh = costoDeVidrio8mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraEstandar + CA;
var puertaDe8mmConAluminioMFDobleBhSpeedy = costoDeVidrio8mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraSpeedy + CA;
var puertaDe8mmConAluminioMFDobleChapa = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + CA;
var puertaDe8mmConAluminioMFDobleChapaBh = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraEstandar + CA;
var puertaDe8mmConAluminioMFDobleChapaBhSpeedy = costoDeVidrio8mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraSpeedy + CA;

var puertaDe8mmConAceroMFDoble = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + CA;
var puertaDe8mmConAceroMFDobleBh = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraEstandar + CA;
var puertaDe8mmConAceroMFDobleBhSpeedy = costoDeVidrio8mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraSpeedy + CA;
var puertaDe8mmConAceroMFDobleChapa = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso  + CA;
var puertaDe8mmConAceroMFDobleChapaBh = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraEstandar + bisagraSpeedy + CA;
var puertaDe8mmConAceroMFDobleChapaBhSpeedy = costoDeVidrio8mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + CA;

var puertaDe10mmConAluminioMFDoble = costoDeVidrio10mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + CA;
var puertaDe10mmConAluminioMFDobleBh = costoDeVidrio10mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAluminioMFDobleBhSpeedy = costoDeVidrio10mm + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraSpeedy + CA;
var puertaDe10mmConAluminioMFDobleChapa = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + CA;
var puertaDe10mmConAluminioMFDobleChapaBh = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAluminioMFDobleChapaBhSpeedy = costoDeVidrio10mm + chapaDA + (manijaA40cm * 2) + (4 * chapetasDeA) + (perfilFcMF.pf * perfilF * 2)+ pasadorDePiso + bisagraSpeedy + CA;

var puertaDe10mmConAceroMFDoble = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + CA; 
var puertaDe10mmConAceroMFDobleBh = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAceroMFDobleBhSpeedy = costoDeVidrio10mm + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraSpeedy + CA;
var puertaDe10mmConAceroMFDobleChapa = costoDeVidrio10mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + CA;
var puertaDe10mmConAceroMFDobleChapaBh = costoDeVidrio10mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAceroMFDobleChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + (manijaAcero40cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + pasadorDePiso + bisagraSpeedy + CA;

var puertaDe10mmConAceroMFDoblePoste = costoDeVidrio10mm + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + CA;
var puertaDe10mmConAceroMFDoblePosteBh = costoDeVidrio10mm + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAceroMFDoblePosteBhSpeedy = costoDeVidrio10mm + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + bisagraSpeedy + CA;
var puertaDe10mmConAceroMFDoblePosteChapa = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + CA;
var puertaDe10mmConAceroMFDoblePosteChapaBh = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + bisagraEstandar + CA;
var puertaDe10mmConAceroMFDoblePosteChapaBhSpeedy = costoDeVidrio10mm + chapaDAcero + (manijaAcero60cm * 2) + (2 * posteDeGiroC) + puntosFijosC + pasadorDePiso + bisagraSpeedy + CA;
/-OTROS-/
var puertaDe10mmConAceroMFDoble2pasadoresManija60 = costoDeVidrio10mm + (manijaAcero60cm * 2) + (4 * chapetasDeAcero) + puntosFijosC + (pasadorDePiso * 2) + CA;

//PUERTA CORREDIZA
var puertaCorrediza8KitMedianoAluminio = kitMediano  + costoDeVidrio8mm + chapaDA + manijaA40cm + CA;
var puertaCorrediza8KitMedianoAcero = kitMediano  + costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + CA;

var puertaCorrediza8KitPesadoAluminio = kitPesado  + costoDeVidrio8mm + chapaDA + manijaA40cm + CA;
var puertaCorrediza8KitPesadoAcero = kitPesado  + costoDeVidrio8mm + chapaDAcero + manijaAcero40cm + CA;



//PUERTA CORREDIZA CON MODULOS FIJOS Y mismo VIDRIO 
var puertaCorredizaConFijos8Aluminio = kitMediano  + costoDeVidrio8mm + chapaDA + manijaA40cm + CA;

//PUERTA CORREDIZA CON MODULOS FIJOS Y VIDRIO DISTINTO
var puertaCorredizaConFijos8y10Aluminio = kitMediano  + (costoAnchoDosFijos.anchoPuerta * alto * vidrio8mm ) + (costoAnchoDosFijos.anchoFijo * alto * vidrio10mm  ) + chapaDA + manijaA40cm  + CA;


//puerta doble con modulos fijos DE DIFERENTE VIDRIO Corrediza

  var puertaCorredizaDobleConFijos8y10Acero = kitPesado + costoKitRodamientoP + (costoAnchoDosFijos.anchoPuerta * alto * vidrio8mm ) + (costoAnchoDosFijos.anchoFijo * alto * vidrio10mm  ) + chapaDAcero
   + (manijaAcero40cm * 2) + pasadorDePiso + CA;

 //PUERTAS AUTOMATICAS corrediza hojas
 var puertaAutomatica2MCorrediza8 = SA2 + costoDeVidrio8mm;
 var puertaAutomatica2MCorrediza10 = SA2 + costoDeVidrio10mm;

 var puertaAutomatica3MCorrediza8 = SA3 + costoDeVidrio8mm;
 var puertaAutomatica3MCorrediza10 = SA3 + costoDeVidrio10mm;

 var puertaAutomatica3MCorrediza8 = SA3 + costoDeVidrio8mm;
 var puertaAutomatica3MCorrediza10 = SA3 + costoDeVidrio10mm;

 var puertaAutomatica4MCorrediza8 = SA4 + costoDeVidrio8mm;
 var puertaAutomatica4MCorrediza10 = SA4 + costoDeVidrio10mm;
 var puertaAutomatica4MCorrediza8 = SA4 + costoDeVidrio8mm;
 var puertaAutomatica4MCorrediza5_5 = SA4 + costoDeVidrio5_5mm;

 var puertaAutomatica4MCorrediza8 = SA6 + costoDeVidrio8mm;
 var puertaAutomatica4MCorrediza10 = SA6 + costoDeVidrio10mm;


//DIVISIONES FIJAS

//division fija menos de 250 de alto
let puntosFijosCFNormal = 0;

if (ancho <= 1) {
  puntosFijosCFNormal = puntosFijosPequeños * 4;
} else if (ancho <= 2) {
  puntosFijosCFNormal = puntosFijosPequeños * 8;
} else if (ancho <= 3) {
  puntosFijosCFNormal = puntosFijosPequeños * 12;
} else if (ancho <= 4) {
  puntosFijosCFNormal = puntosFijosPequeños * 16;
} else if (ancho <= 6) {
  puntosFijosCFNormal = puntosFijosPequeños * 24;
}



//division fija grande 3 de alto
let puntosFijosCFGrand = 0;
if (ancho <= 2.4) {
  puntosFijosCFGrand = puntosFijosPequeños * 8;
} else if (ancho <= 3.6) {
  puntosFijosCFGrand = puntosFijosPequeños * 12;
} else if (ancho <= 4.8) {
  puntosFijosCFGrand = puntosFijosPequeños * 16;
} else if (ancho <= 6) {
  puntosFijosCFGrand = puntosFijosPequeños * 24;
}

var divicionFijaD8AceroNormal = costoDeVidrio8mm + puntosFijosC + CA;
var divicionFijaD8AluminioNormal = costoDeVidrio8mm + ( perfilF * 2) + CA;

var divicionFijaD10AceroNormal = costoDeVidrio10mm + puntosFijosCFNormal + CA;
var divicionFijaD10AceroGrande = costoDeVidrio10mm + puntosFijosCFGrand + CA;
//Cerramiento
var factor = Math.min(1000, (ancho - 1) + 2);
var marcoPgC = alto * marcoPg * factor;
var marcoPg_C = ancho * marcoPg_ * 2;
//Si ancho = 2:
//(2−1)+2=3
//Si ancho = 3
//(3−1)+2=4
//Si ancho = 4
//(4−1)+2=5 asi sucesivamente

var cerramientoPgConAluminio = costoDeVidrio8mm + marcoPgC + marcoPg_C;

//puerta de una hoja
document.getElementById('pD6CAluminioSencilla').value = puertaDe6mmSencilla;
console.log()

document.getElementById('pD8CAluminio').value = puertaDe8mmConAluminio;
document.getElementById('pD8CAluminioBh').value = puertaDe8mmConAluminioBh;
document.getElementById('pD8CAluminioBhSpeedy').value = puertaDe8mmConAluminioBhSpeedy;
document.getElementById('pD8CAluminioChapa').value = puertaDe8mmConAluminioChapa;
document.getElementById('pD8CAluminioChapaBh').value = puertaDe8mmConAluminioChapaBh;
document.getElementById('pD8CAluminioChapaBhSpeedy').value = puertaDe8mmConAluminioBhSpeedy;

document.getElementById('pD8CAcero').value = puertaDe8mmConAcero;
document.getElementById('pD8CAceroBh').value = puertaDe8mmConAceroBh;
document.getElementById('pD8CAceroBhSpeedy').value = puertaDe8mmConAceroBhSpeedy;
document.getElementById('pD8CAceroChapa').value = puertaDe8mmConAceroChapa;
document.getElementById('pD8CAceroChapaBh').value = puertaDe8mmConAceroChapaBh;
document.getElementById('pD8CAceroChapaBhSpeedy').value = puertaDe8mmConAceroChapaBhSpeedy;

document.getElementById('pD10CAluminio').value = puertaDe10mmConAluminio;
document.getElementById('pD10CAluminioBh').value = puertaDe10mmConAluminioBh;
document.getElementById('pD10CAluminioBhSpeedy').value = puertaDe10mmConAluminioBhSpeedy;
document.getElementById('pD10CAluminioChapa').value = puertaDe10mmConAluminioChapa;
document.getElementById('pD10CAluminioChapaBh').value = puertaDe10mmConAluminioChapaBh;
document.getElementById('pD10CAluminioChapaBhSpeedy').value = puertaDe10mmConAluminioChapaBhSpeedy;

document.getElementById('pD10CAcero').value = puertaDe10mmConAcero;
document.getElementById('pD10CAceroBh').value = puertaDe10mmConAceroBh;
document.getElementById('pD10CAceroBhSpeedy').value = puertaDe10mmConAceroBhSpeedy;
document.getElementById('pD10CAceroChapa').value = puertaDe10mmConAceroChapa;
document.getElementById('pD10CAceroChapaBh').value = puertaDe10mmConAceroChapaBh;
document.getElementById('pD10CAceroChapaBhSpeedy').value = puertaDe10mmConAceroChapaBhSpeedy;

document.getElementById('pD10CAceroPoste').value = puertaDe10mmConAceroPoste;
document.getElementById('pD10CAceroPosteBh').value = puertaDe10mmConAceroPosteBh;
document.getElementById('pD10CAceroPosteBhSpeedy').value = puertaDe10mmConAceroPosteBhSpeedy;
document.getElementById('pD10CAceroPosteChapa').value = puertaDe10mmConAceroPosteChapa;
document.getElementById('pD10CAceroPosteChapaBh').value = puertaDe10mmConAceroPosteChapaBh;
document.getElementById('pD10CAceroPosteChapaBhSpeedy').value = puertaDe10mmConAceroPosteChapaBhSpeedy;

document.getElementById('pD10CAceroPosteManija60cm').value = puertaDe10mmConAceroPosteManija60cm;
document.getElementById('pD10CAceroPosteManija60cmBh').value = puertaDe10mmConAceroPosteManija60cmBh;
document.getElementById('pD10CAceroPosteManija60cmBhSpeedy').value = puertaDe10mmConAceroPosteManija60cmBhSpeedy;
document.getElementById('pD10CAceroPosteManija60cmChapa').value = puertaDe10mmConAceroPosteChapaManija60cm;
document.getElementById('pD10CAceroPosteManija60cmChapaBh').value = puertaDe10mmConAceroPosteChapaBhManija60cm;
document.getElementById('pD10CAceroPosteManija60cmChapaBhSpeedy').value = puertaDe10mmConAceroPosteChapaBhSpeedyManija60cm;

//puerta de una hoja con modulos fijos
document.getElementById('pD8CAluminioMF').value = puertaDe8mmConAluminioMF;
document.getElementById('pD8CAluminioMFBh').value = puertaDe8mmConAluminioMFBh;
document.getElementById('pD8CAluminioMFBhSpeedy').value = puertaDe8mmConAluminioMFBhSpeedy;
document.getElementById('pD8CAluminioMFChapa').value = puertaDe8mmConAluminioMFChapa;
document.getElementById('pD8CAluminioMFChapaBh').value = puertaDe8mmConAluminioMFChapaBh;
document.getElementById('pD8CAluminioMFChapaBhSpeedy').value = puertaDe8mmConAluminioMFChapaBhSpeedy;

document.getElementById('pD8CAceroMF').value = puertaDe8mmConAceroMF;
document.getElementById('pD8CAceroMFBh').value = puertaDe8mmConAceroMFBh;
document.getElementById('pD8CAceroMFBhSpeedy').value = puertaDe8mmConAceroMFBhSpeedy;
document.getElementById('pD8CAceroMFChapa').value = puertaDe8mmConAceroMFChapa;
document.getElementById('pD8CAceroMFChapaBh').value = puertaDe8mmConAceroMFChapaBh;
document.getElementById('pD8CAceroMFChapaBhSpeedy').value = puertaDe8mmConAceroMFChapaBhSpeedy;

document.getElementById('pD10CAluminioMF').value = puertaDe10mmConAluminioMF;
document.getElementById('pD10CAluminioMFBh').value = puertaDe10mmConAluminioMFBh;
document.getElementById('pD10CAluminioMFBhSpeedy').value = puertaDe10mmConAluminioMFBhSpeedy;
document.getElementById('pD10CAluminioMFChapa').value = puertaDe10mmConAluminioMFChapa;
document.getElementById('pD10CAluminioMFChapaBh').value = puertaDe10mmConAluminioMFChapaBh;
document.getElementById('pD10CAluminioMFChapaBhSpeedy').value = puertaDe10mmConAluminioMFChapaBhSpeedy;

document.getElementById('pD10CAceroMF').value = puertaDe10mmConAceroMF;
document.getElementById('pD10CAceroMFBh').value = puertaDe10mmConAceroMFBh;
document.getElementById('pD10CAceroMFBhSpeedy').value = puertaDe10mmConAceroMFBhSpeedy;
document.getElementById('pD10CAceroMFChapa').value = puertaDe10mmConAceroMFChapa;
document.getElementById('pD10CAceroMFChapaBh').value = puertaDe10mmConAceroMFChapaBh;
document.getElementById('pD10CAceroMFChapaBhSpeedy').value = puertaDe10mmConAceroMFChapaBhSpeedy;

document.getElementById('pD10CAceroMFPoste').value = puertaDe10mmConAceroMFPoste;
document.getElementById('pD10CAceroMFPosteBh').value = puertaDe10mmConAceroMFPosteBh;
document.getElementById('pD10CAceroMFPosteBhSpeedy').value = puertaDe10mmConAceroMFPosteBhSpeedy;
document.getElementById('pD10CAceroMFPosteChapa').value = puertaDe10mmConAceroMFPosteChapa;
document.getElementById('pD10CAceroMFPosteChapaBh').value = puertaDe10mmConAceroMFPosteChapaBh;
document.getElementById('pD10CAceroMFPosteChapaBhSpeedy').value = puertaDe10mmConAceroMFPosteChapaBhSpeedy;

document.getElementById('pD10CAceroMFPosteManija60cm').value = puertaDe10mmConAceroMFPosteManija60cm;
document.getElementById('pD10CAceroMFPosteManija60cmBh').value = puertaDe10mmConAceroMFPosteManija60cmBh;
document.getElementById('pD10CAceroMFPosteManija60cmBhSpeedy').value = puertaDe10mmConAceroMFPosteManija60cmBhSpeedy;
document.getElementById('pD10CAceroMFPosteManija60cmChapa').value = puertaDe10mmConAceroMFPosteChapaManija60cm;
document.getElementById('pD10CAceroMFPosteManija60cmChapaBh').value = puertaDe10mmConAceroMFPosteChapaBhManija60cm;
document.getElementById('pD10CAceroMFPosteManija60cmChapaBhSpeedy').value = puertaDe10mmConAceroMFPosteChapaBhSpeedyManija60cm;

//puerta doble
document.getElementById('pD6CAluminioSencillaDoble').value = puertaDe6mmSencillaDoble;

document.getElementById('pD8CAluminioDoble').value = puertaDe8mmConAluminioDoble;
document.getElementById('pD8CAluminioDobleBh').value = puertaDe8mmConAluminioDobleBh;
document.getElementById('pD8CAluminioDobleBhSpeedy').value = puertaDe8mmConAluminioDobleBhSpeedy;
document.getElementById('pD8CAluminioDobleChapa').value = puertaDe8mmConAluminioDobleChapa;
document.getElementById('pD8CAluminioDobleChapaBh').value = puertaDe8mmConAluminioDobleChapaBh;
document.getElementById('pD8CAluminioDobleChapaBhSpeedy').value = puertaDe8mmConAluminioDobleChapaBhSpeedy;

document.getElementById('pD8CAceroDoble').value = puertaDe8mmConAceroDoble;
document.getElementById('pD8CAceroDobleBh').value = puertaDe8mmConAceroDobleBh;
document.getElementById('pD8CAceroDobleBhSpeedy').value = puertaDe8mmConAceroDobleBhSpeedy;
document.getElementById('pD8CAceroDobleChapa').value = puertaDe8mmConAceroDobleChapa;
document.getElementById('pD8CAceroDobleChapaBh').value = puertaDe8mmConAceroDobleChapaBh;
document.getElementById('pD8CAceroDobleChapaBhSpeedy').value = puertaDe8mmConAceroDobleChapaBhSpeedy;

document.getElementById('pD10CAluminioDoble').value = puertaDe10mmConAluminioDoble;
document.getElementById('pD10CAluminioDobleBh').value = puertaDe10mmConAluminioDobleBh;
document.getElementById('pD10CAluminioDobleBhSpeedy').value = puertaDe10mmConAluminioDobleBhSpeedy;
document.getElementById('pD10CAluminioDobleChapa').value = puertaDe10mmConAluminioDobleChapa;
document.getElementById('pD10CAluminioDobleChapaBh').value = puertaDe10mmConAluminioDobleChapaBh;
document.getElementById('pD10CAluminioDobleChapaBhSpeedy').value = puertaDe10mmConAluminioDobleChapaBhSpeedy;

document.getElementById('pD10CAceroDoble').value = puertaDe10mmConAceroDoble;
document.getElementById('pD10CAceroDobleBh').value = puertaDe10mmConAceroDobleBh;
document.getElementById('pD10CAceroDobleBhSpeedy').value = puertaDe10mmConAceroDobleBhSpeedy;
document.getElementById('pD10CAceroDobleChapa').value = puertaDe10mmConAceroDobleChapa;
document.getElementById('pD10CAceroDobleChapaBh').value = puertaDe10mmConAceroDobleChapaBh;
document.getElementById('pD10CAceroDobleChapaBhSpeedy').value = puertaDe10mmConAceroDobleChapaBhSpeedy;

document.getElementById('pD10CAceroDoblePoste').value = puertaDe10mmConAceroDoblePoste;
document.getElementById('pD10CAceroDoblePosteBh').value = puertaDe10mmConAceroDoblePosteBh;
document.getElementById('pD10CAceroDoblePosteBhSpeedy').value = puertaDe10mmConAceroDoblePosteBhSpeedy;
document.getElementById('pD10CAceroDoblePosteChapa').value = puertaDe10mmConAceroDoblePosteChapa;
document.getElementById('pD10CAceroDoblePosteChapaBh').value = puertaDe10mmConAceroDoblePosteChapaBh;
document.getElementById('pD10CAceroDoblePosteChapaBhSpeedy').value = puertaDe10mmConAceroDoblePosteChapaBhSpeedy;

document.getElementById('pD10CAceroPosteDobleBhSpeedyManija1').value = puertaDe10mmConAceroDoblePostesBhidraulicaSpeedySAmanija1;
/- otros-/
document.getElementById('pD5_5CAceroDoblePosteChapa').value = puertaDe5_5mmConAceroDoblePosteChapa;

//puerta con modulo abatible
document.getElementById('pD8CAluminioMA').value = puertaDe8mmConAluminioMA;
document.getElementById('pD8CAluminioMABh').value = puertaDe8mmConAluminioMABh;
document.getElementById('pD8CAluminioMABhSpeedy').value = puertaDe8mmConAluminioMABhSpeedy;
document.getElementById('pD8CAluminioMAChapa').value = puertaDe8mmConAluminioMAChapa;
document.getElementById('pD8CAluminioMAChapaBh').value = puertaDe8mmConAluminioMAChapaBh;
document.getElementById('pD8CAluminioMFChapaBhSpeedy').value = puertaDe8mmConAluminioMAChapaBhSpeedy;

document.getElementById('pD8CAceroMA').value = puertaDe8mmConAceroMA;
document.getElementById('pD8CAceroMABh').value = puertaDe8mmConAceroMABh;
document.getElementById('pD8CAceroMABhSpeedy').value = puertaDe8mmConAceroMABhSpeedy;
document.getElementById('pD8CAceroMAChapa').value = puertaDe8mmConAceroMAChapa;
document.getElementById('pD8CAceroMAChapaBh').value = puertaDe8mmConAceroMAChapaBh;
document.getElementById('pD8CAceroMAChapaBhSpeedy').value = puertaDe8mmConAceroMAChapaBhSpeedy;

document.getElementById('pD10CAluminioMA').value = puertaDe10mmConAluminioMA;
document.getElementById('pD10CAluminioMABh').value = puertaDe10mmConAluminioMABh;
document.getElementById('pD10CAluminioMABhSpeedy').value = puertaDe10mmConAluminioMABhSpeedy;
document.getElementById('pD10CAluminioMAChapa').value = puertaDe10mmConAluminioMAChapa;
document.getElementById('pD10CAluminioMAChapaBh').value = puertaDe10mmConAluminioMAChapaBh;
document.getElementById('pD10CAluminioMAChapaBhSpeedy').value = puertaDe10mmConAluminioMAChapaBhSpeedy;

document.getElementById('pD10CAceroMA').value = puertaDe10mmConAceroMA;
document.getElementById('pD10CAceroMABh').value = puertaDe10mmConAceroMABh;
document.getElementById('pD10CAceroMABhSpeedy').value = puertaDe10mmConAceroMABhSpeedy;
document.getElementById('pD10CAceroMAChapa').value = puertaDe10mmConAceroMAChapa;
document.getElementById('pD10CAceroMAChapaBh').value = puertaDe10mmConAceroMAChapaBh;
document.getElementById('pD10CAceroMAChapaBhSpeedy').value = puertaDe10mmConAceroMAChapaBhSpeedy;

//doble BATIENTE CON MODULOS *

document.getElementById('pD8CAluminioMFDoble').value = puertaDe8mmConAluminioMFDoble;
document.getElementById('pD8CAluminioMFDobleBh').value = puertaDe8mmConAluminioMFDobleBh;
document.getElementById('pD8CAluminioMFDobleBhSpeedy').value = puertaDe8mmConAluminioMFDobleBhSpeedy;
document.getElementById('pD8CAluminioMFDobleChapa').value = puertaDe8mmConAluminioMFDobleChapa;
document.getElementById('pD8CAluminioMFDobleChapaBh').value = puertaDe8mmConAluminioMFDobleChapaBh;
document.getElementById('pD8CAluminioMFDobleChapaBhSpeedy').value = puertaDe8mmConAluminioMFDobleChapaBhSpeedy;

document.getElementById('pD8CAceroMFDoble').value = puertaDe8mmConAceroMFDoble;
document.getElementById('pD8CAceroMFDobleBh').value = puertaDe8mmConAceroMFDobleBh;
document.getElementById('pD8CAceroMFDobleBhSpeedy').value = puertaDe8mmConAceroMFDobleBhSpeedy;
document.getElementById('pD8CAceroMFDobleChapa').value = puertaDe8mmConAceroMFDobleChapa;
document.getElementById('pD8CAceroMFDobleChapaBh').value = puertaDe8mmConAceroMFDobleChapaBh;
document.getElementById('pD8CAceroMFDobleChapaBhSpeedy').value = puertaDe8mmConAceroMFDobleChapaBhSpeedy;

document.getElementById('pD10CAluminioMFDoble').value = puertaDe10mmConAluminioMFDoble;
document.getElementById('pD10CAluminioMFDobleBh').value = puertaDe10mmConAluminioMFDobleBh;
document.getElementById('pD10CAluminioMFDobleBhSpeedy').value = puertaDe10mmConAluminioMFDobleBhSpeedy;
document.getElementById('pD10CAluminioMFDobleChapa').value = puertaDe10mmConAluminioMFDobleChapa;
document.getElementById('pD10CAluminioMFDobleChapaBh').value = puertaDe10mmConAluminioMFDobleChapaBh;
document.getElementById('pD10CAluminioMFDobleChapaBhSpeedy').value = puertaDe10mmConAluminioMFDobleChapaBhSpeedy;

document.getElementById('pD10CAceroMFDoble').value = puertaDe10mmConAceroMFDoble;
document.getElementById('pD10CAceroMFDobleBh').value = puertaDe10mmConAceroMFDobleBh;
document.getElementById('pD10CAceroMFDobleBhSpeedy').value = puertaDe10mmConAceroMFDobleBhSpeedy;
document.getElementById('pD10CAceroMFDobleChapa').value = puertaDe10mmConAceroMFDobleChapa;
document.getElementById('pD10CAceroMFDobleChapaBh').value = puertaDe10mmConAceroMFDobleChapaBh;
document.getElementById('pD10CAceroMFDobleChapaBhSpeedy').value = puertaDe10mmConAceroMFDobleChapaBhSpeedy;

document.getElementById('pD10CAceroMFDoblePoste').value = puertaDe10mmConAceroMFDoblePoste;
document.getElementById('pD10CAceroMFDoblePosteBh').value = puertaDe10mmConAceroMFDoblePosteBh;
document.getElementById('pD10CAceroMFDoblePosteBhSpeedy').value = puertaDe10mmConAceroMFDoblePosteBhSpeedy;
document.getElementById('pD10CAceroMFDoblePosteChapa').value = puertaDe10mmConAceroMFDoblePosteChapa;
document.getElementById('pD10CAceroMFDoblePosteChapaBh').value = puertaDe10mmConAceroMFDoblePosteChapaBh;
document.getElementById('pD10CAceroMFDoblePosteChapaBhSpeedy').value = puertaDe10mmConAceroMFDoblePosteChapaBhSpeedy;
/- otros-/
document.getElementById('pD10CAceroMFDobleOtros').value = puertaDe10mmConAceroMFDoble2pasadoresManija60;


//PUERTA CORREDIZA
document.getElementById('pD8CorredizaKitmedianoAluminio').value = puertaCorrediza8KitMedianoAluminio;
document.getElementById('pD8CorredizaKitpesadoAluminio').value = puertaCorrediza8KitPesadoAluminio;

document.getElementById('pD8CorredizaKitmedianoAcero').value = puertaCorrediza8KitMedianoAcero;
document.getElementById('pD8CorredizaKitpesadoAcero').value = puertaCorrediza8KitPesadoAcero;

//PUERTA CORREDIZA CON MODULOS FIJOS CON MISMO VIDRIO
document.getElementById('pD8AluminioCorredizaConModulosFijos').value = puertaCorredizaConFijos8Aluminio;

//PUERTA CORREDIZA CON MODULOS FIJOS CON DISTINTO VIDRIO
document.getElementById('pD10y8AluminioCorredizaConModulosFijos').value = puertaCorredizaConFijos8y10Aluminio;


//CORREDIZA doble con fijos
document.getElementById('pD10y8AceroCorredizaDobleConModulosFijos').value = puertaCorredizaDobleConFijos8y10Acero;


//puerta SA CORREDIZA
document.getElementById('pSA2Corrediza8').value = puertaAutomatica2MCorrediza8;
document.getElementById('pSA2Corrediza10').value = puertaAutomatica2MCorrediza10;

//Puerta automatica
document.getElementById('pSA4Corrediza5_5').value = puertaAutomatica4MCorrediza5_5;
document.getElementById('pSA4Corrediza8').value = puertaAutomatica4MCorrediza8;

//divisiones FIJAS
document.getElementById('dD8Acero').value = divicionFijaD8AceroNormal;
document.getElementById('dD8Aluminio').value = divicionFijaD8AluminioNormal;

document.getElementById('dD10Acero').value = divicionFijaD10AceroNormal;
document.getElementById('dD10AceroGrande').value = divicionFijaD10AceroGrande;


//cerramiento
document.getElementById('ceD8AluminioPg').value = cerramientoPgConAluminio;

//costo adicional


// Opción para obtener el valor seleccionado
document.getElementById('costoEstandar').addEventListener('change', function() {
  let opcionSeleccionada = this.value;  // Esto te da el valor de la opción seleccionada

  document.getElementById('resultadoC').innerHTML = opcionSeleccionada;
});
 

  
}
var valorConPorcentajeC = 0;

function aplicarPorcentajeC() {
  // Obtener el valor del porcentaje ingresado por el usuario

  var porcentajeC = parseFloat(document.getElementById('porcentajeC').value);
  var costoE = parseFloat(document.getElementById('costoEstandar').value)

  
  // Verificar que el porcentaje sea válido
  if (isNaN(porcentajeC) || porcentajeC < 0) {
      alert("Porcentaje inválido. Por favor, ingrese un valor numérico positivo.");
      return;
  }

  // Calcular el valor total multiplicado por el porcentaje
  valorConPorcentajeC = costoE * (1 + porcentajeC / 100);

  // Mostrar el resultado en el HTML
  document.getElementById('resultadoPorcentajeC').innerText = "El valor total con la utilidad aplicado es: $" + valorConPorcentajeC.toFixed(2) ;
};

var totalInstalacionC = 0;

function calcularInstaC(){
  var alto = parseFloat(document.getElementById('alto').value);
  var ancho = parseFloat(document.getElementById('ancho').value);
    var areaCosto = alto * ancho;
    var instalacionC = parseFloat(document.getElementById('instalacionCosto').value);
    totalInstalacionC = areaCosto * instalacionC ;

    document.getElementById('resultadoIC').innerText = "La instalacion Total es: $" + totalInstalacionC.toFixed(2);// esto es para los pesos

};


function calcularTotalC(){
  var VAcosto = parseFloat(document.getElementById('VAcosto').value);
var pelicula =  parseFloat(document.getElementById('pelicula').value); 
var altoP = parseFloat(document.getElementById('alto').value);
var anchoP = parseFloat(document.getElementById('ancho').value);
var costoPelicula = altoP * anchoP * pelicula;
 var transC = parseFloat(document.getElementById('transporteC').value);
    var totalTransporteC = VAcosto + valorConPorcentajeC + costoPelicula +totalInstalacionC + transC  ;

    document.getElementById('VTVC').innerHTML = "El valor del servicio completo es:$" + totalTransporteC + "+ IVA";//.toFixed(2) esto es para los pesos

};
