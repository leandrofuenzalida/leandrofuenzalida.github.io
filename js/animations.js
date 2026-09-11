function animarLogo() {
  const logoDesktop = document.querySelector(".logo-desktop");

  if (!logoDesktop) {
    console.log("No encontré .logo-desktop");
    return;
  }

  // Guarda el HTML original
  const htmlOriginal = logoDesktop.innerHTML;
  const textoOriginal = logoDesktop.textContent.trim();
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Solo mayúsculas, sin números

  let frame = 0;
  const totalFrames = 30;

  const interval = setInterval(() => {
    frame++;

    if (frame >= totalFrames) {
      // Restaura el HTML original (con el span y todo)
      logoDesktop.innerHTML = htmlOriginal;
      clearInterval(interval);
      return;
    }

    // Genera texto "scrambled"
    let textoScramble = "";
    for (let i = 0; i < textoOriginal.length; i++) {
      if (i < (frame / totalFrames) * textoOriginal.length) {
        textoScramble += textoOriginal[i];
      } else {
        textoScramble +=
          caracteres[Math.floor(Math.random() * caracteres.length)];
      }
    }

    // Solo actualiza el texto, no todo el HTML
    logoDesktop.textContent = textoScramble;
  }, 30);
}

function inicializarLogo() {
  console.log("inicializarLogo ejecutada");
  const linklogo = document.querySelector(".linklogo");

  if (!linklogo) {
    console.log("No encontré .linklogo");
    return;
  }

  console.log("Event listener agregado a .linklogo");

  // Al cargar la página
  window.addEventListener("load", animarLogo);

  // Al hacer hover
  linklogo.addEventListener("mouseenter", animarLogo);
}
