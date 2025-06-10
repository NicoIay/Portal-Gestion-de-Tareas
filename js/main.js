function volverPagina() {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "index.html"; // o cualquier página anterior
    }
  }