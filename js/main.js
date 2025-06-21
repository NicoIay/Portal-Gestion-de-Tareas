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
            if (nombre === "") { // Mejor validar si está vacío, no solo la longitud
                alert("El nombre de la tarea no puede estar vacío.");
                return; // Detiene la función, el formulario no se procesa
            }

            if (nombre.length <= 5) { // Si tiene 5 o menos caracteres
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return; // Detiene la función
            }
