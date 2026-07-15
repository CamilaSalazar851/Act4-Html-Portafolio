const tabs = document.querySelectorAll('.tab');
const pantallas = document.querySelectorAll('.pantalla');
const botonesNavegacion = document.querySelectorAll('[data-target]');

function mostrarSeccion(id) {
  pantallas.forEach(function (pantalla) {
    pantalla.classList.toggle('activa', pantalla.id === id);
  });
  tabs.forEach(function (tab) {
    tab.classList.toggle('active', tab.dataset.target === id);
  });
}

botonesNavegacion.forEach(function (boton) {
  boton.addEventListener('click', function () {
    mostrarSeccion(boton.dataset.target);
  });
});

const frases = [
  'Desarrolladora web en formación',
  'Construyendo con HTML, CSS y JavaScript',
  'Aprendiendo Firebase y Web Components'
];

let indiceFrase = 0;
let indiceCaracter = 0;
let borrando = false;
const elementoTexto = document.getElementById('texto-rotativo');

function escribir() {
  const fraseActual = frases[indiceFrase];

  if (!borrando) {
    indiceCaracter++;
    elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
    if (indiceCaracter === fraseActual.length) {
      borrando = true;
      setTimeout(escribir, 1800);
      return;
    }
  } else {
    indiceCaracter--;
    elementoTexto.textContent = fraseActual.slice(0, indiceCaracter);
    if (indiceCaracter === 0) {
      borrando = false;
      indiceFrase = (indiceFrase + 1) % frases.length;
    }
  }

  setTimeout(escribir, borrando ? 30 : 60);
}

escribir();

const elementoReloj = document.getElementById('reloj-status');

function actualizarReloj() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, '0');
  const minutos = String(ahora.getMinutes()).padStart(2, '0');
  elementoReloj.textContent = horas + ':' + minutos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000 * 30);
