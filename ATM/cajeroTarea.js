var imagenBilletes = {
	5: "img/billete_5.gif",
	10: "img/billete_10.gif",
	20: "img/billete_20.gif",
	50: "img/billete_50.gif",
	100: "img/billete_100.gif",
	500: "img/billete_500.gif",
	1000: "img/billete_1000.gif"
};




// console.log(imagenBilletes);

class Billetes {
	constructor(valor, cantidad, es_moneda) {
		this.imagen = new Image();
		this.valor = valor;
		this.cantidad = cantidad;
		this.imagenSrc = imagenBilletes[this.valor];
		this.es_moneda = es_moneda; 
	}
}

var caja = [];
caja.push(new Billetes(1000, 10, false));
caja.push(new Billetes(500, 5, false));
caja.push(new Billetes(100, 15, false));
caja.push(new Billetes(50, 10, false));
caja.push(new Billetes(20, 5, false));
caja.push(new Billetes(10, 15, true));
caja.push(new Billetes(5, 55, true));

var dinero;
var papeles = 0;
var div = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entragarDinero);

//Historial------------------------------------
var His = document.getElementById("Historial");
His.addEventListener("click", MostrarHistorial);
const HistorialTotal = document.getElementById("HistorialCre");


var Historial = [];

function MostrarHistorial() {
	let stringHistorial = JSON.stringify(Historial);
	HistorialTotal.innerHTML = stringHistorial;

	console.log(Historial);
	console.log(typeof stringHistorial);
}
//Historial------------------------------------

function entragarDinero() {
	var entregado = [];
	const resultado_Dinero = document.getElementById("resultado");

	resultado_Dinero.innerHTML = '';

	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);

	let PosicionDelBillete = 0;


	for (var bi of caja) {
		if (dinero > 0) {
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad) {
				papeles = bi.cantidad;
			}
			else {
				papeles = div;
			}
			entregado.push(new Billetes(bi.valor, papeles, bi.es_moneda));
			//Se modifica el Array--------------------------------------
			caja[PosicionDelBillete] = new Billetes(bi.valor, bi.cantidad - papeles, bi.es_moneda);
			//Se modifica el Array--------------------------------------          
			dinero = dinero - (bi.valor * papeles);
			//Historial------------------------------------
			Historial.push(new Billetes(bi.valor, papeles, bi.es_moneda));
			//Historial------------------------------------
		}
		PosicionDelBillete += 1
	}
	if (dinero > 0) {
		resultado_Dinero.innerHTML = "Ya no hay dinero.";
	}
	else {
		for (const e of entregado) {
			console.log({ caja });
			if (e.cantidad > 0) {
				// resultado_Dinero.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>"; //"+=" lo que tiene la variable agregale esto, es decir, resultado = """resultado""" mas algo, se omite el segundo "resultado".
				let x = 0;
				while (e.cantidad > x) {
					const image = document.createElement("img");
					image.src = e.imagenSrc
					// image.style.border = "1px solid red"; Asi le ponemos border a los billetes con CSS

					if(e.es_moneda) {
						image.style.borderRadius = "50%";
					}

					const salto = document.createElement("br")


					resultado_Dinero.appendChild(image)
					resultado_Dinero.appendChild(salto)
					// e.mostrar();
					x = x + 1;
				}
			}
		}
	}

}
