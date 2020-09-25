const planetas = {
  mercurio: {
      nombre: "Mercurio",
      gravedad: 3.7,
      imagen: "img/mercurio.gif" 
  },
  venus: {
      nombre: "Venus",
      gravedad: 8.87,
      imagen: "img/venus.gif" 
  },
  tierra: {
      nombre: "Tierra",
      gravedad: 9.81,
  },
  marte: {
      nombre: "Marte",
      gravedad: 3.7,
      imagen: "img/marte.gif" 
  },
  jupiter: {
      nombre: "Jupiter",
      gravedad: 24.8,
      imagen: "img/jupiter.gif" 
  },
  saturno: {
      nombre: "Saturno",
      gravedad: 10.44,
      imagen: "img/saturno.gif" 
  },
  urano: {
      nombre: "Urano",
      gravedad: 8.87,
      imagen: "img/urano.gif" 
  },
  neptuno: {
      nombre: "Neptuno",
      gravedad: 11.15,
      imagen: "img/neptuno.gif" 
  },
};


const ImgPlanetas = document.getElementById("ImgPlanetitas");
var cajaPeso = document.getElementById("texto");
var resultado_peso = document.getElementById("resultado");

cajaPeso.addEventListener("input", resultadito);

// planeta
const PlanetaSelec = document.getElementById("QuePlaneta")
// Planeta

let planeta = PlanetaSelec.options[0].value;

ImgPlanetas.src = planetas[planeta]["imagen"];
console.log(planetas[planeta]["imagen"]);

PlanetaSelec.addEventListener("click", function(event)
{
  planeta = event.target.value;
  ImgPlanetas.src = planetas[planeta]["imagen"];
  resultadito();
});

function resultadito() {

  console.log(planetas[planeta]);
  console.log(nombre);
  
  if (planeta)
  {
      var peso_final;
      var nombre;
      // let planeta = parseInt(value);
      let peso = parseInt(cajaPeso.value);
          peso_final = peso * (planetas[planeta]["gravedad"]) / (planetas["tierra"]["gravedad"]);
          nombre = planetas[planeta]["nombre"];
          console.log(nombre);
  }
  
  console.log(cajaPeso.value);

  peso_final = parseInt(peso_final);

  // document.write("Tu peso en " + nombre + " es <strong>" + peso_final + " kilos</strong>"); //El resultado aparece borrando lo de arriba, 
  //es normal, con el id="resultado", aparece abajo de todo, sin desaparecer lo demas.
  if (!isNaN(peso_final))
  {
      resultado_peso.innerHTML = "Tu peso en " + nombre + " es <strong>" + peso_final + " kilos.</strong>";
      
  }
  else
  {
      resultado_peso.innerHTML = "Ingresar peso."
  }
  
}



// body {
//     /* Ubicación de la imagen */
//     background-image: url(sistemaSolar.gif);
//     /* Para dejar la imagen de fondo centrada, vertical y
//     horizontalmente */
//     background-position: center center;
//     /* Para que la imagen de fondo no se repita */
//     background-repeat: no-repeat;
// }