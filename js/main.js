function volverPagina() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html"; // O la página principal de tu aplicación
    }
}


const $formulario = document.querySelector("#formulario");
const $nombre = document.querySelector("#nombre");
const $descripcion = document.querySelector("#descripcion");
const $fecha = document.querySelector("#fecha");
const $materia = document.querySelector("#materia")

$formulario.onsubmit = evento => {
            evento.preventDefault(); // Detiene el envío predeterminado del formulario

            const nombre = $nombre.value.trim(); 
            const descripcion = $descripcion.value.trim();
            const fecha = $fecha.value; 
            const materia = $materia.value

            // Validaciones
            if (nombre === "") { 
                alert("El nombre de la tarea no puede estar vacío.");
                return; 
            }

            if (nombre.length <= 5) { // Si tiene 5 o menos caracteres
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return; // Detiene la función
            }

            // Aquí puedes añadir más validaciones:
            if (materia === "") { 
                alert("El campo de materia no puede estar vacio");
                return; 
            }

          const MIN_LENGTH_DESCRIPCION = 10;
          if (descripcion.length < MIN_LENGTH_DESCRIPCION) {
              alert(`La descripción es muy corta. Debe tener al menos ${MIN_LENGTH_DESCRIPCION} caracteres.`);
              return; 
          }
          

            const nuevaTarea = {
                id: Date.now(), // Un ID simple basado en la marca de tiempo
                nombre: nombre,
                materia: document.querySelector("#materia").value,
                descripcion: descripcion,
                fechaEntrega: fecha,
                estado: document.querySelector("#estado").value
                
            };

          
            $formulario.reset();
        };
