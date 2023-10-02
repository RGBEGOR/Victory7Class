
let banderas = ["Rom.png", "Вар.jpg", "Чиг.jpg", "Пу.png", "Ah.jpg","Ka.jpg","Аве.jpg","Хор.jpg","Мав.jpg","Фео.jpg",
"Рома.jpg","Нап.jpg","Жанна.jpg","Сувв.jpg","США.png","Карол.jpg"];

let correcta = [0,2,1,1,0,0,2,1,0,0,1,2,0,1,0,0,0,1,2,0,1,2,0,1];

let opciones = [];

opciones.push(["РИМ", "ФРАНКИ", "ВИЗАНТИЯ"]);
opciones.push(["ВАНДАЛЫ", "КЕЛЬТЫ ГОТЫ", "ВАРВАРЫ"]);
opciones.push(["СНИГИРЬ", "ЧИГИРЬ", "ЧТО ТО ТАМ "]);
opciones.push(["МОНТЕРЕ ХЛОДВИГ", "ПУАТЬЕ МАРТЕЛ", "ТУЛОН НАПОЛЕОН"]);
opciones.push(["КАРЛ ВЕЛИКИЙ", "ПИПИН", "КАРЛ ЛЫСЫЙ"]);
opciones.push(["800 ГОД", "801 ГОД", "843 ГОД"]);
opciones.push(["БИБЛИЯ", "ТОРА", "АВЕСТА"]);
opciones.push(["Мавераннахр", "Хорезм", "Хорасан"]);
opciones.push(["Мавераннахр", "Хорезм", "Хорасан"]);
opciones.push(["Феодал", "Вассал", "Ремесленник"]);
opciones.push(["300 год Константинополь", "476 Рим", "Ахен 843"]);
opciones.push(["Суворов", "Даву", "Наполеон"]);
opciones.push(["Жанна Д.Арк", "Алиса", "Екатерина"]);
opciones.push(["Наполеон", "Суворов", "Багратион"]);
opciones.push(["13 колоний", "Австралия", "Новая зеландия"]);
opciones.push(["Каролинги", "Капетинги", "Меровинги"]);


let posActual = 0;
let cantidadAcertadas = 0;
function comenzarJuego(){

    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}

function cargarBandera(){

    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){

    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";

    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio(){

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}

