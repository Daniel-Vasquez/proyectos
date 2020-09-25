var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");
var xi, yi, xf, yf, pushbutton;

cuadrito.addEventListener("mousedown", clickInicial);
cuadrito.addEventListener("mousemove", clickLinea);
cuadrito.addEventListener("mouseup", clickFinal);

function clickInicial(evento) {
    pushbutton = 0;
    xi = evento.layerX;
    yi = evento.layerY;
    console.log("click inicial " + pushbutton);

}

function clickLinea(evento) {
    if(pushbutton == 0) {
        colorcito = "purple";
        xf = evento.layerX;
        yf = evento.layerY;
        dibujarLinea(colorcito, xi, yi, xf, yf, papel);
        xi = xf;
        yi = yf;
        console.log("click linea " + pushbutton);
    }
}


function clickFinal() {
    pushbutton = 1;
    console.log("click fina " + pushbutton);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}