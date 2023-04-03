

//const button = document.getElementById("button");
const chisteContainer = document.querySelector(".jokes-container");

//Programming misc dark pun spooky christmas
//botones
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

let categoria = "";
//evento
btn1.addEventListener("click", () => {
    btn1.setAttribute("selected", "selected");
    btn2.removeAttribute("selected");
    btn3.removeAttribute("selected");
    btn4.removeAttribute("selected");
    btn5.removeAttribute("selected");
    btn6.removeAttribute("selected");
    categoria = "Programming";
    obtenerChiste(categoria)
});

btn2.addEventListener("click", () => {
    btn1.removeAttribute("selected");
    btn2.setAttribute("selected", "selected");
    btn3.removeAttribute("selected");
    btn4.removeAttribute("selected");
    btn5.removeAttribute("selected");
    btn6.removeAttribute("selected");
    categoria = "Christmas";
    obtenerChiste(categoria)
    });

btn3.addEventListener("click", () => {
    btn1.removeAttribute("selected");
    btn2.removeAttribute("selected");
    btn3.setAttribute("selected", "selected");
    btn4.removeAttribute("selected");
    btn5.removeAttribute("selected");
    btn6.removeAttribute("selected");
    categoria = "Misc";
    obtenerChiste(categoria)
});

btn4.addEventListener("click", () => {
    btn1.removeAttribute("selected");
    btn2.removeAttribute("selected");
    btn3.removeAttribute("selected");
    btn4.setAttribute("selected", "selected");
    btn5.removeAttribute("selected");
    btn6.removeAttribute("selected");
    categoria = "Dark";
    obtenerChiste(categoria)
});

btn5.addEventListener("click", () => {
    btn1.removeAttribute("selected");
    btn2.removeAttribute("selected");
    btn3.removeAttribute("selected");
    btn4.removeAttribute("selected");
    btn5.setAttribute("selected", "selected");
    btn6.removeAttribute("selected");
    categoria = "Pun";
    obtenerChiste(categoria)
  });

btn6.addEventListener("click", () => {
    btn1.removeAttribute("selected");
    btn2.removeAttribute("selected");
    btn3.removeAttribute("selected");
    btn4.removeAttribute("selected");
    btn5.removeAttribute("selected");
    btn6.setAttribute("selected", "selected");
    categoria = "Spooky";
    obtenerChiste(categoria)
  });

//button.addEventListener("click", (e) => {
//    e.preventDefault();
//    obtenerChiste(categoria)
//});

function obtenerChiste(categoria){
    fetch(`https://v2.jokeapi.dev/joke/${categoria}?type=twopart`) 

        .then((respuesta) => respuesta.json())
        .then((data) => {
            crearChiste(data);
        });
}
function crearChiste(chiste) {
    // Obtener una referencia
    var chiste1Anterior = document.getElementById("michiste1");
    var chiste2Anterior = document.getElementById("michiste2");

    //si existe chiste anterior, eliminarlo
    if (chiste1Anterior) {
      chiste1Anterior.remove();
    }
    if (chiste2Anterior) {
        chiste2Anterior.remove();
    }

    //crea nuevo chiste
    var nuevoChiste1 = document.createElement("h1");
    nuevoChiste1.id = "michiste1";
    nuevoChiste1.innerHTML = chiste.setup;
    document.getElementById("contenedor").appendChild(nuevoChiste1);

    var nuevoChiste2 = document.createElement("h2");
    nuevoChiste2.id = "michiste2";
    nuevoChiste2.innerHTML = chiste.delivery;
    document.getElementById("contenedor").appendChild(nuevoChiste2);
}

function crearChiste4(chiste){
    //chisteContainer.appendChild(div);
    const h1 = document.createElement("h1");
    h1.textContent = chiste.setup;

    const h3 = document.createElement("h3");
    h3.textContent = chiste.delivery;
    
    const div = document.createElement("div");
    div.appendChild(h1);   
    div.appendChild(h3);

    chisteContainer.appendChild(div);
    console.log(chiste);
}