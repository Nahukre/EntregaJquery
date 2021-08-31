let miFormulario = document.getElementById("myForm");

class persona {
    constructor(nombre, mail, sueldo, ahorro, extra, objetivo, valorBien) {
        this.nombre = nombre;
        this.mail = mail;
        this.sueldo = sueldo;
        this.ahorro = ahorro;
        this.extra = extra;
        this.objetivo = objetivo;
        this.valorBien = valorBien;
    }
    toString() {
        return `Nombre: ${this.nombre} \nMail: ${this.mail} \nSueldo: ${this.sueldo} \nAhorro: ${this.ahorro} \nIngreso extra anual: ${this.extra} \nBien a adquirir: ${this.objetivo} \nValor del Bien: ${this.valorBien}`;
    }
}

let arrayUsuarios = [];

let buttonSubmit = document.getElementById('submitButton');
miFormulario.addEventListener("submit", crearUsuario);

const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;
const suma = (a, b) => a + b;

function crearUsuario(e) {

    e.preventDefault();
    let formulario = e.target;

    let nombreIngresado = document.getElementById('nombre').value;
    let emailIngresado = document.getElementById('email').value;
    let sueldoIngresado = document.getElementById('sueldo').value;
    let ahorroIngresado = parseInt(document.getElementById('ahorro').value);
    let extraIngresado = parseInt(document.getElementById('extra').value);
    let objetivoIngresado = document.getElementById('objetivo').value;
    let valorBienIngresado = document.getElementById('valorBien').value;

    let usuario = new persona(nombreIngresado, emailIngresado, sueldoIngresado, ahorroIngresado, extraIngresado, objetivoIngresado, valorBienIngresado);

    arrayUsuarios.push(usuario);

    localStorage.setItem(1, JSON.stringify(arrayUsuarios));


    console.log(usuario)

    //mostrarNuevaPersona =>


    const multiplicacion = (a, b) => a * b;
    const division = (a, b) => a / b;
    const suma = (a, b) => a + b;

    let ahorroPorcentaje = division((multiplicacion(100, ahorroIngresado)), sueldoIngresado);
    let ahorroAnual = suma((multiplicacion(ahorroIngresado, 12)), extraIngresado);
    let mesesDeAhorro = division(valorBienIngresado, sueldoIngresado);
    let ahorroReal = division(valorBienIngresado, ahorroIngresado);
    let sueldoAños = division(mesesDeAhorro, 12);
    let ahorroAños = division(ahorroReal, 12);
    let tiempoTotal = division(valorBienIngresado, (suma(extraIngresado, ahorroAnual)));
    // let tiempoPlus = division(valorBienIngresado, multiplicacion(ahorroAnual, 1.1));

    $(document).ready(function() {
        $("#submitButton").click(function(event) {
            $("#cuantoTardo").empty();
            $("#card").empty();
        });
    });

    function tiempo() {
        let tiempoTotal = division(valorBienIngresado, (suma(extraIngresado, ahorroAnual)))
        if (tiempoTotal < 1) {
            tiempoTotal = "menos de un año"
        } else {
            tiempoTotal = `${tiempoTotal.toFixed()} años`
        }
        return tiempoTotal
    }

    function AhorroAños() {
        let ahorroAños = division(ahorroReal, 12)
        if (ahorroAños < 1) {
            ahorroAños = "menos de un año"
        } else {
            ahorroAños = `${ahorroAños.toFixed()} años`
        }
        return ahorroAños
    }

    function SueldoAños() {
        let sueldoAños = division(mesesDeAhorro, 12)
        if (sueldoAños < 1) {
            sueldoAños = "menos de un año"
        } else {
            sueldoAños = `${sueldoAños.toFixed()} años`
        }
        return sueldoAños
    }

    function AhorroReal() {
        let ahorroReal = division(valorBienIngresado, ahorroIngresado)
        if (ahorroReal < 1) {
            ahorroReal = "menos de un mes"
        } else {
            ahorroReal = `${ahorroReal.toFixed()} meses`
        }
        return ahorroReal
    }

    function MesesDeAhorro() {
        let mesesDeAhorro = division(valorBienIngresado, sueldoIngresado);
        if (mesesDeAhorro < 1) {
            mesesDeAhorro = "menos de un mes"
        } else {
            mesesDeAhorro = `${mesesDeAhorro.toFixed()} meses`
        }
        return mesesDeAhorro
    }


    let cuantoTardo = document.getElementById("cuantoTardo");

    switch (true) {
        case (ahorroPorcentaje <= 5):
            let contenedorPorcentajeAhorro1 = document.createElement("div");
            contenedorPorcentajeAhorro1.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro1.innerHTML = `<h5>\nSu porcentaje de ahorro es bajo.</h><h3>Hola ${usuario.nombre}!</h3>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5> 
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro1);
            break;
        case ((ahorroPorcentaje > 5) && (ahorroPorcentaje <= 10)):
            let contenedorPorcentajeAhorro2 = document.createElement("div");
            contenedorPorcentajeAhorro2.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro2.innerHTML = `<h3>Hola ${usuario.nombre}!</h3>
            <h4>\nSu porcentaje de ahorro podría ser más elevado</h4>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5>
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro2);
            break;
        case ((ahorroPorcentaje > 10) && (ahorroPorcentaje <= 20)):
            let contenedorPorcentajeAhorro3 = document.createElement("div");
            contenedorPorcentajeAhorro3.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro3.innerHTML = `<h3>Hola ${usuario.nombre}!</h3>
            <h4>\nSu porcentaje de ahorro es considerable</h4>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5> 
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro3);
            break;
        case ((ahorroPorcentaje > 20) && (ahorroPorcentaje <= 50)):
            let contenedorPorcentajeAhorro4 = document.createElement("div");
            contenedorPorcentajeAhorro4.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro4.innerHTML = `<h3>Hola ${usuario.nombre}!</h3>
            <h4>\nSu porcentaje de ahorro es elevado</h4>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5> 
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro4);
            break;
        case (ahorroPorcentaje > 50):
            let contenedorPorcentajeAhorro5 = document.createElement("div");
            contenedorPorcentajeAhorro5.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro5.innerHTML = `<h3>Hola ${usuario.nombre}!</h3>
            <h4>\nUsted tiene una gran capacidad de ahorro</h4>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5> 
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro5);
            break;
        default:
            let contenedorPorcentajeAhorro6 = document.createElement("div");
            contenedorPorcentajeAhorro6.classList.add('operacionOpciones');
            contenedorPorcentajeAhorro6.innerHTML = `<h3>Hola ${usuario.nombre}!</h3>
            <h4>\nUsted no ahorra o ingresó un dato incorrecto</h4>
            <h5>\nSu porcentaje de ahorro mensual es del ${ahorroPorcentaje.toFixed(2)}%</h5> 
            <h5>\nSu ahorro anual es de $${ahorroAnual}</h5> 
            <h5>\nValor del Bien: $${usuario.valorBien}<h5>
            <h5>\nSi destinara todo su sueldo a comprar su ${usuario.objetivo} tardaría ${MesesDeAhorro()} o ${SueldoAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara solo su ahorro mensual a comprar su ${usuario.objetivo} tardaría ${AhorroReal()} o ${AhorroAños()} para comprar lo que desea</h5> 
            <h5>\nSi destinara su ahorro anual más sus ingresos extra anuales a comprar su ${usuario.objetivo} tardaría ${tiempo()} para comprar lo que desea</h5>`;
            cuantoTardo.appendChild(contenedorPorcentajeAhorro6);
            break;
    }

    let dolarBlueAhorro = division(document.getElementById('ahorro').value, dolarBlue.valor);
    let bitcoinAhorro = division(document.getElementById('ahorro').value, bitcoin.valor);
    let appleAhorro = division(document.getElementById('ahorro').value, cedearApple.valor);
    let amazonAhorro = division(document.getElementById('ahorro').value, cedearAmazon.valor);
    let teslaAhorro = division(document.getElementById('ahorro').value, cedearTesla.valor);
    let oroAhorro = division(document.getElementById('ahorro').value, oro.valor);

    // let mostrarCardActivos = document.getElementById("cardActivos");

    $("#mostrarTipoInversor").prepend(`<h6 class="operacionOpcion2">Listado de posibles inversiones</h6>`);
    for (const inversiones of nacional.activo) {
        $("#card").append(`<div class= "activo__dolarBlue">
        <h2 class="dolarBlue__nombre">${inversiones.denominacion}</h2>
        <img class="activo__foto" src="${inversiones.foto}" alt="foto de ${inversiones.denominacion}" width= "100px" height= "100px">
        <p class="activo__info">${inversiones.descripcion}</p>
        <p class="activo__valor">Valor: $${inversiones.valor}</p>
        <h5 class="opciones">\nUsted podría comprar con su ahorro mensual ${division(ahorroIngresado, inversiones.valor).toFixed(2)} ${inversiones.denominacion}.</h5></div>`);
    }


    $(".operacionOpcion2").css("display", "block");
    document.getElementById("formIdBis").style.display = "none";
    $("#mostrarCuantoTardo").css("display", "block");
    $(".sidebar").css("display", "block");
    $("#mostarTipoInversor").css("display", "inline-block");
    $("#myForm")[0].reset();
};
localStorage.setItem(1, JSON.stringify(arrayUsuarios));
console.log(localStorage.getItem(1));



// array
class Inversion {
    constructor(denominacion, nivelRiesgo, valor, descripcion, foto) {
        this.denominacion = denominacion;
        this.nivelRiesgo = nivelRiesgo;
        this.valor = valor;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}
class activoDeInversion {
    constructor() {
        this.activo = [];
    }
    agregarInversion(inversion) {
        this.activo.push(inversion);
    }
}

let nacional = new activoDeInversion("Activos dentro del mercado local con los cuales poder ahorrar");
let dolarBlue = new Inversion("Dolar blue", 1, 170, "El Dólar Blue es el dólar que se consigue en el mercado negro o paralelo. Su cotización o valor generalmente es superior a la cotización del oficial y suele aumentar a medida que aumenta el control de cambios o se incrementan las restricciones para la compra de dólares al precio oficial.", "../img/dolar.jpg");
let bitcoin = new Inversion("Bitcoin", 3, 8300000, "Bitcoin es una criptomoneda descentralizada, es decir que no existe una autoridad de control que sea responsable de su emisión y registro de sus movimientos.", "../img/bitcoin.jpg");
let cedearTesla = new Inversion("Tesla cedear", 3, 7500, "Cedears  (Certificados de Depósito Argentinos) de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado. Este activo es considerado de riesgo.", "../img/tesla.png");
let cedearApple = new Inversion("Apple cedear", 2, 3500, "Cedears  (Certificados de Depósito Argentinos) de la compañia Apple. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.", "../img/apple.jpg");
let cedearAmazon = new Inversion("Amazon cedear", 2, 4500, "Cedears  (Certificados de Depósito Argentinos) de la compañia Amazon. Activo financiero atado al dolar y a la valuación de la empresa en el mercado.", "../img/amazon.jpg");
let oro = new Inversion("Oro", 1, 5570000, "El oro es un metal precioso utilizado como reserva de valor. Se caracteriza por tener poca variación en su cotización y ser resguardo de valor en epocas de inflación. El interés por las materias primas parece que está en auge y hay buenos catalizadores que pueden mantener esta dinámica creciente.", "../img/oro.jpg");

nacional.agregarInversion(dolarBlue);
nacional.agregarInversion(bitcoin);
nacional.agregarInversion(cedearTesla);
nacional.agregarInversion(cedearApple);
nacional.agregarInversion(cedearAmazon);
nacional.agregarInversion(oro);

const ordenarActivos = () => {
    nacional.activo.sort((a, b) => {
        if (a.valor < b.valor) {
            return -1;
        }
        if (a.valor > b.valor) {
            return 1;
        }
        return 0;
    });
    console.log(nacional.activo);
}
ordenarActivos();

// const opcionesDeInversion = [
//     { nombre: "Dolar blue", valor: 170, descripcion: "moneda norteamericana en el mercado informal" },
//     { nombre: "Bitcoin", valor: 7000000, descripcion: "Criptomoneda" },
//     { nombre: "Testa cedear", valor: 7500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },
//     { nombre: "Apple cedear", valor: 3500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },
//     { nombre: "Disney cedear", valor: 4500, descripcion: "Cedear de la compañia Tesla. Activo financiero atado al dolar y a la valuación de la empresa en el mercado." },


//quizz

let miFormulario2 = document.getElementById("formulario2")

let buttonSubmitQuizz = document.getElementById('submitButtonQuizz');
miFormulario2.addEventListener("submit", definirInversor);

function definirInversor(f) {
    f.preventDefault();
    let formulario = f.target;


    //Preguntas que ya no se usan prompt
    // let cuantoInvierte = parseInt(prompt("Qué porcentaje de sus ahorros invertiría? \n1- Hasta un 10% \n2- Hasta un 20% \n3- Más de un 20 %"));
    // let queHaría = parseInt(prompt("Si un activo que posee se reduce en su valor drasticamente, usted: \n1- Vende el activo \n2- Espera a que suba su precio nuevamente \n3- Compra más aprovechando su menor valor"));
    // let porcentajePerdida = parseInt(prompt("Qué porcentaje de su inversión estaría dispúesto a perder con tal de obtener ganancias? \n1- No está dispuesto a arriesgar sus ahorros \n2- Está dispuesto a arriezgar algo de sus ahorros \n3- Arriezgaría un porcentaje considerable de sus ahorros con miras a obtener ganancias futuras"));
    // let activoConPotencial = parseInt(prompt("Si surge un nuevo activo, con gran potencial de crecimiento, pero con gran riezgo, usted: \n1- No invertiría en ese activo \n2- Invertiría una parte pequeña de su capital en ese activo \n3- Si confía en el activo invertiría sin dudarlo"));
    // let tipoDeInversor = cuantoInvierte + queHaría + porcentajePerdida + activoConPotencial

    let porcentajeDeAhorro = parseInt(document.querySelector('input[name="porcentajeDeAhorro"]:checked').value);
    let reduccionDeActivo = parseInt(document.querySelector('input[name="reduccionDeActivo"]:checked').value);
    let gananciaEsperada = parseInt(document.querySelector('input[name="gananciaEsperada"]:checked').value);
    let nuevoActivo = parseInt(document.querySelector('input[name="nuevoActivo"]:checked').value);
    let SumaQuizz = porcentajeDeAhorro + reduccionDeActivo + gananciaEsperada + nuevoActivo;
    console.log(SumaQuizz);

    // const ordenarNivelRiesgo = () => {
    //     nacional.activo.sort((a, b) => {
    //         if (a.nivelRiesgo < b.nivelRiesgo) {
    //             return -1;
    //         }
    //         if (a.nivelRiesgo > b.nivelRiesgo) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    //     console.log(nacional.activo);
    // }
    // ordenarNivelRiesgo();

    $(document).ready(function() {
        $("#submitButtonQuizz").click(function(event) {
            $("#tipoInversor").empty();
            $(".resultadoTipoInversor2").empty();
        });
    });

    let tipoInversor = document.getElementById("tipoInversor");


    switch (true) {
        case (SumaQuizz <= 4 || SumaQuizz <= 6):
            let inversorConservadorJson = { "tipoDeInversor": "conservador" };
            localStorage.setItem("tipoDeInversor", JSON.stringify(inversorConservadorJson));
            console.log(localStorage.getItem("tipoDeInversor"));
            let contenedorTipoInversorConservador = document.createElement("div");
            contenedorTipoInversorConservador.innerHTML =
                `<h5 class="operacionOpcion">Usted es un inversor conservador</h>`;
            tipoInversor.appendChild(contenedorTipoInversorConservador);
            for (const inversiones of nacional.activo) {
                $(".resultadoTipoInversor2").append(`<div class= "nivelRiesgo${inversiones.nivelRiesgo}">
                    <h2 class="dolarBlue__nombre">${inversiones.denominacion}</h2>
                    <img class="activo__foto2" src="${inversiones.foto}" alt="foto de ${inversiones.denominacion}" width= "100px" height= "100px">
                    <p class="activo__valor2">Valor: $${inversiones.valor}</p>
                    </div>`);
            }

            $(".nivelRiesgo2").css("display", "none");
            $(".nivelRiesgo3").css("display", "none");
            break;

        case (SumaQuizz <= 7 || SumaQuizz <= 9):
            let inversorModeradoJson = { "tipoDeInversor": "moderado" };
            localStorage.setItem("tipoDeInversor", JSON.stringify(inversorModeradoJson));
            console.log(localStorage.getItem("tipoDeInversor"));
            let contenedorTipoInversorModerado = document.createElement("div");
            contenedorTipoInversorModerado.innerHTML =
                `<h5 class="operacionOpcion">Usted es un inversor Moderado</h>`;
            tipoInversor.appendChild(contenedorTipoInversorModerado);
            for (const inversiones of nacional.activo) {
                $(".resultadoTipoInversor2").append(`<div class= "nivelRiesgo${inversiones.nivelRiesgo}">
                <h2 class="dolarBlue__nombre">${inversiones.denominacion}</h2>
                <img class="activo__foto" src="${inversiones.foto}" alt="foto de ${inversiones.denominacion}" width= "100px" height= "100px">
                <p class="activo__valor2">Valor: $${inversiones.valor}</p>
                </div>`);
            }

            $(".nivelRiesgo1").css("display", "none");
            $(".nivelRiesgo3").css("display", "none");
            break;

        case (SumaQuizz >= 10 || SumaQuizz <= 12):
            let inversorAgresivoJson = { "tipoDeInversor": "agresivo" };
            localStorage.setItem("tipoDeInversor", JSON.stringify(inversorAgresivoJson));
            console.log(localStorage.getItem("tipoDeInversor"));
            let contenedorTipoInversorAgresivo = document.createElement("div");
            contenedorTipoInversorAgresivo.innerHTML =
                `<h5 class="operacionOpcion">Usted es un inversor agresivo</h>`;
            tipoInversor.appendChild(contenedorTipoInversorAgresivo);
            for (const inversiones of nacional.activo) {
                $(".resultadoTipoInversor2").append(`<div class= "nivelRiesgo${inversiones.nivelRiesgo}">
                <h2 class="dolarBlue__nombre">${inversiones.denominacion}</h2>
                <img class="activo__foto2" src="${inversiones.foto}" alt="foto de ${inversiones.denominacion}" width= "100px" height= "100px">
                <p class="activo__valor2">Valor: $${inversiones.valor}</p>
                </div>`);
            }

            $(".nivelRiesgo1").css("display", "none");
            $(".nivelRiesgo2").css("display", "none");
            break;
    }
    localStorage.setItem(1, JSON.stringify(arrayUsuarios));

    document.getElementById("formId").style.display = "none";
    $(".resultadoTipoInversor").css("display", "block");
    $(".operacionOpcion3").css("display", "block");
    $("#mostrarCuantoTardo").css("display", "block");
    $(".sidebar").css("display", "block");
    $("#mostarTipoInversor").css("display", "inline-block");
    $("#formulario2")[0].reset();
}
definirInversor();

function abrir() {
    document.getElementById("formId").style.display = "block";
}

function abrirFormulario() {
    document.getElementById("formIdBis").style.display = "block";
}

function cerrar() {
    document.getElementById("formId").style.display = "none";
}

function cerrarFormulario() {
    document.getElementById("formIdBis").style.display = "none";
}

/// Scroll up ///

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function() {

    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 100) {
        buttonUp.style.transform = "scale(0)";
    }

}

let PesosADolar = parseInt(prompt("ingreses cuantos pesos va gastar en dolares"));
let pepe = PesosADolar / 165;
let pipo = PesosADolar - (165 * 200);
let blue = pipo / 183;
let dolaresTotal = pepe + blue;
let dolarBolsa = PesosADolar / 170;
if (pepe <= 200) {
    console.log("usted tiene q comprar dólar oficial")
} else {
    if (dolarTotal > dolarBolsa) {
        console.log("compré dólar oficial y blue")
    } else if (dolaresTotal < dolarBolsa) {
        console.log("compré dólar bolsa")
    } else console.log("Es lo mismo")
}