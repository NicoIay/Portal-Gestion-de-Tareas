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
        const $materia = document.querySelector(#materia);

        $formulario.onsubmit = evento => {
            evento.preventDefault(); // Detiene el envío predeterminado del formulario

            const nombre = $nombre.value.trim(); // .trim() para quitar espacios al inicio/final
            const descripcion = $descripcion.value.trim();
            const fecha = $fecha.value; /
            const materia = $materia.value;

            const largo_descripcion = 10;

            // Validaciones
            if (nombre === "") { // Mejor validar si está vacío, no solo la longitud
                alert("El nombre de la tarea no puede estar vacío.");
                return; // Detiene la función, el formulario no se procesa
            }

            if (nombre.length <= 5) { // Si tiene 5 o menos caracteres
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return; // Detiene la función
            }

            if (descripcion.length < largo_descripcion){
                alert("la descripcion debe contener al menos 10 caracteres")
                return;
            }
            if(materia == ""){
                alert("El campo de materia no puede estar vacio");
                return; // Detiene la función
            }

            // Si todas las validaciones PASAN, entonces procesa los datos:
            const nuevaTarea = {
                id: Date.now(), // Un ID simple basado en la marca de tiempo
                nombre: nombre,
                materia: document.querySelector("#materia").value,
                descripcion: descripcion,
                fechaEntrega: fecha,
                estado: document.querySelector("#estado").value
                // Añadir aquí los campos PSP como tiempoEstimado, tiempoReal, etc.
            };

        
        };

      
