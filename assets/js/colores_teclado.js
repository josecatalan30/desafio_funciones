document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase();

  const colorFondo = {
    a: "pink",
    s: "orange",
    d: "skyblue"
  };

  const colorNuevo = {
    q: "purple",
    w: "grey",
    e: "brown"
  };

  if (colorFondo[key]) {
    cambiarColor(colorFondo[key]);
  } else if (colorNuevo[key]) {
    agregarColor(colorNuevo[key]);
  }
});

function cambiarColor(color) {
  const contenedor = document.getElementById("key");
  contenedor.style.backgroundColor = color;
}

function agregarColor(color) {
  const contenedor = document.getElementById("nuevo");
  const nuevoElemento = document.createElement("div");
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.width = "200px";
  nuevoElemento.style.height = "200px";
  contenedor.appendChild(nuevoElemento);
}