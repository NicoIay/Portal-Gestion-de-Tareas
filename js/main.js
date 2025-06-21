function volverPagina() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html"; // O la página principal de tu aplicación
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle"); // Asegúrate de que este 'toggle' exista en el HTML donde se usa

    // Solo si el elemento 'toggle' existe en la página actual
    if (toggle) {
        // Aplicar modo guardado al cargar la página
        const modoGuardado = localStorage.getItem("modo");
        if (modoGuardado === "oscuro") {
            document.body.classList.add("modo-oscuro");
            toggle.checked = true;
        }

        // Escuchar cambio del checkbox
        toggle.addEventListener("change", () => {
            document.body.classList.toggle("modo-oscuro");

            const modoActual = document.body.classList.contains("modo-oscuro") ? "oscuro" : "claro";
            localStorage.setItem("modo", modoActual);
        });
    }

    
    const $formularioCrearTarea = document.querySelector("#formulario");
    if ($formularioCrearTarea) {
        const $nombre = document.querySelector("#nombre");
        const $descripcion = document.querySelector("#descripcion");
        const $fecha = document.querySelector("#fecha");
        const $materia = document.querySelector("#materia"); // Necesario para la validación de materia

        $formularioCrearTarea.onsubmit = evento => {
            evento.preventDefault();

            const nombre = $nombre.value.trim();
            const descripcion = $descripcion.value.trim();
            const fecha = $fecha.value;
            const materiaSeleccionada = $materia.value; // Obtener el valor de la materia aquí

            // Validaciones para el formulario de Tarea
            if (nombre === "") {
                alert("El nombre de la tarea no puede estar vacío.");
                return;
            }
            if (nombre.length <= 5) {
                alert("El nombre de la tarea es muy corto (mínimo 6 caracteres).");
                return;
            }
            if (materiaSeleccionada === "") {
                alert("Debes seleccionar una materia.");
                return;
            }

            const MIN_LENGTH_DESCRIPCION = 10;
        
            if (descripcion.length < MIN_LENGTH_DESCRIPCION) {
                alert(`La descripción es muy corta. Debe tener al menos ${MIN_LENGTH_DESCRIPCION} caracteres.`);
                return;
            }

        
        };
    }


    const $formulariopw = document.querySelector("#formulariopw");
    if ($formulariopw) {
        const $oldpassw = document.querySelector("#oldpassw");
        const $newpassw = document.querySelector("#newpassw");
        const $confnewpassw = document.querySelector("#confnewpassw");

        $formulariopw.onsubmit = evento => {
            evento.preventDefault();

            const oldpassw = $oldpassw.value.trim();
            const newpassw = $newpassw.value.trim();
            const confnewpassw = $confnewpassw.value.trim();

            const MIN_LENGTH_PASSWORD = 8;

            // Validaciones para el formulario de Cambio de Contraseña
            if (oldpassw === "") {
                alert("La contraseña actual no puede estar vacía.");
                return;
            }

            if (newpassw === "") {
                alert("La nueva contraseña no puede estar vacía.");
                return;
            }

            if (newpassw.length < MIN_LENGTH_PASSWORD) {
                alert(`La nueva contraseña es muy corta. Debe tener al menos ${MIN_LENGTH_PASSWORD} caracteres.`);
                return;
            }

            if (confnewpassw === "") {
                alert("Debes confirmar la nueva contraseña.");
                return;
            }

            if (newpassw !== confnewpassw) {
                alert("La nueva contraseña y su confirmación no coinciden.");
                return;
            }

            if (oldpassw === newpassw) {
                alert("La nueva contraseña no puede ser igual a la contraseña actual.");
                return;
            }
