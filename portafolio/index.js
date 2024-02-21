// Función para inicializar el efecto de escritura
function initializeTypingEffect() {
    let typingEffect = new Typed("#multiText", {
      strings: ["Desarrollador Frontend ", "Desarrollador Backend ", "Desarrollador Full-Stack "],
      loop: true,
      typeSpeed:   100,
      backSpeed:   80,
      backDelay:   1500
    });
  }
  
  // Función para inicializar las barras de progreso
  function initializeProgressBars() {
    let bar1 = new ProgressBar.Circle('.circle .bar', {
      // ... configuración de la barra  1
    });
    bar1.animate(0.85); //   85%
  
    let bar2 = new ProgressBar.Circle('.js .bar', {
      // ... configuración de la barra  2
    });
    bar2.animate(0.6); //   60%
  
    let bar3 = new ProgressBar.Circle('.css .bar', {
      // ... configuración de la barra  3
    });
    bar3.animate(0.8); //   80%
  }
  
  // Función para inicializar ScrollReveal
  function initializeScrollReveal() {
    ScrollReveal().reveal('.header', { origin: 'top' , delay:   500 });
    ScrollReveal().reveal('.main', { origin: 'top', distance: '50px', delay:   500 });
    ScrollReveal().reveal('.portadaIzquierda', { origin: 'left', distance: '50px', delay:   500 });
    ScrollReveal().reveal('.portadaDerecha', { origin: 'right', distance: '50px', delay:   500 });
    ScrollReveal().reveal('.aboutMe', { origin: 'bottom', distance: '50px', delay:   500 });
    ScrollReveal().reveal('.projects', { origin: 'bottom', distance: '50px', delay:   500 });
    ScrollReveal().reveal('.contac', { origin: 'bottom', distance: '50px', delay:   500 });
  }
  
  // Llamar a las funciones con un retraso
  setTimeout(initializeTypingEffect,  1000); // Inicializar después de  1 segundo
  setTimeout(initializeProgressBars,  2000); // Inicializar después de  2 segundos
  setTimeout(initializeScrollReveal,  3000); // Inicializar después de  3 segundos
  

