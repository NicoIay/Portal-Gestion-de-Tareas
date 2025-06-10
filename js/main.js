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