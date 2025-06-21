function volverPagina() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "index.html"; // o cualquier página anterior
    }
  }


  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
  
    // Aplicar modo guardado
    const modoGuardado = localStorage.getItem("modo");
    if (modoGuardado === "oscuro") {
      document.body.classList.add("modo-oscuro");
      toggle.checked = true;
    }
  
    // Escuchar cambio del checkbox
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("modo-oscuro");
  
      const modoActual = document.body.classList.contains("modo-oscuro")
        ? "oscuro"
        : "claro";
      localStorage.setItem("modo", modoActual);
    });
  });


const $formulario = document.querySelector("#formulario");
        const $nombre = document.querySelector("#nombre");
        const $descripcion = document.querySelector("#descripcion");
        const $fecha = document.querySelector("#fecha"); // CORRECCIÓN: #fecha

        $formulario.onsubmit = evento => {
            evento.preventDefault(); // Detiene el envío predeterminado del formulario

            const nombre = $nombre.value.trim(); 
            const descripcion = $descripcion.value.trim();
            const fecha = $fecha.value; 

            // Validaciones
            if (nombre === "") { 
                alert("El nombre de la tarea no puede estar vacío.");
                return;
            }

            if (nombre.length <= 5) { 
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return; 
            }

             // Validación para la materia
            if (materiaSeleccionada === "") { // Usar el valor obtenido
              alert("Debes seleccionar una materia."); // Mensaje más claro
              return;
            }

            // Validación para la descripción
            const MIN_LENGTH_DESCRIPCION = 10;
            if (descripcion.length < MIN_LENGTH_DESCRIPCION) {
              alert(`La descripción es muy corta. Debe tener al menos ${MIN_LENGTH_DESCRIPCION} caracteres.`);
              return;
            }

const $formulariopw = document.querySelector("#formulariopw");
const $oldpassw = document.querySelector("#oldpassw");
const $newpassw = document.querySelector("#newpassw");
const $confnewpassw = document.querySelector("#confnewpassw");

  $formulariopw.onsubmit = evento => {

    evento.preventDefault(); // Detiene el envío predeterminado del formulario

    const oldpassw = $oldpassw.value.trim();
    const newpassw = $newpassw.value.trim();
    const confnewpassw = $confnewpassw.value.trim();

    const MIN_LENGTH_PASSWORD = 8; // Definir una constante para la longitud mínima

    if (newpassw.length < MIN_LENGTH_PASSWORD) { 
      alert(`La nueva contraseña es muy corta. Debe tener al menos ${MIN_LENGTH_PASSWORD} caracteres.`);
      return;
    }


    if (newpassw !== confnewpassw) {

      alert("La nueva contraseña y su confirmación no coinciden.");
      return;
    }
