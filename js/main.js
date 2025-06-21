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
        const $fecha = document.querySelector("#fecha"); // CORRECCIÓN: #fecha

        $formulario.onsubmit = evento => {
            evento.preventDefault(); // Detiene el envío predeterminado del formulario

            const nombre = $nombre.value.trim(); // .trim() para quitar espacios al inicio/final
            const descripcion = $descripcion.value.trim();
            const fecha = $fecha.value; // La fecha se maneja diferente, no trim

            // Validaciones
            if (nombre === "") { // Mejor validar si está vacío, no solo la longitud
                alert("El nombre de la tarea no puede estar vacío.");
                return; // Detiene la función, el formulario no se procesa
            }

            if (nombre.length <= 5) { // Si tiene 5 o menos caracteres
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return; // Detiene la función
            }

            // Aquí puedes añadir más validaciones:
            // - Materia seleccionada (que no sea el option value vacío)
            // - Fecha válida y en el futuro (si aplica)
            // - Descripción no vacía o con longitud mínima/máxima
            // - Otros campos PSP (tiempo estimado, real)

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

            console.log("Tarea lista para guardar/procesar:", nuevaTarea);
            alert("Tarea validada correctamente y lista para procesamiento (revisa la consola).");

            // *** Aquí iría la lógica para guardar la tarea ***
            // Por ejemplo, guardarla en localStorage:
            // let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
            // tareas.push(nuevaTarea);
            // localStorage.setItem('tareas', JSON.stringify(tareas));

            // Después de procesar, puedes resetear el formulario (opcional):
            $formulario.reset();
        };

      
