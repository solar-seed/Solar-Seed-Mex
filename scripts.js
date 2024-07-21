// ----main---
document.addEventListener('DOMContentLoaded', () => {
    const heroTextElements = document.querySelectorAll('.hero-text, .hero-text .animated-text');

    const options = {
        threshold: 0.1 // Ejecutar la animación cuando al menos el 10% del elemento sea visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    heroTextElements.forEach(element => {
        observer.observe(element);
    });
});


// --section nosotros
document.addEventListener('DOMContentLoaded', function() {
    let observerOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 0.6
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    let sections = document.querySelectorAll('.section-nosotros');
    sections.forEach(section => {
        observer.observe(section);
    });
});



// section-panorama

var img = new Image();

// Variables de usuario - personalizar estas para cambiar la imagen cuando inicie el desplazamiento
// dirección y velocidad.

img.src = "imagenes/sol-panor.jpg";
var CanvasXSize = 10;
var CanvasYSize = 500;
var speed = 25; //más bajo es más rápido
var scale = 1.05;
var y = -4.5; //desplazamiento vertical

// Programa principal

var dx = 0.75;
var imgW;
var imgH;
var x = 10;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > CanvasXSize) {
    // imagen más grande que canvas
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    // ancho de imagen más grande que canvas
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    // altura de la imagen más grande que canvas
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }

  // obtener contexto de canvas
  ctx = document.getElementById("canvas").getContext("2d");

  // establecer frecuencia de actualización
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // si la imagen es <= tamaño de Canvas
  if (imgW <= CanvasXSize) {
    // reiniciar, comenzar desde el principio
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // dibujar image1 adicional
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // dibujar image2 adicional
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  }

  // la imagen es > tamaño de Canvas
  else {
    // reiniciar, comenzar desde el principio
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    // dibujar image adicional
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // dibujar imagen
  ctx.drawImage(img, x, y, imgW, imgH);
  // cantidad para moverse
  x += dx;
}

// ----section-servicios

document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null, // Use the viewport as the container
    rootMargin: "0px",
    threshold: 0.1 // Trigger animation when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('left-text')) {
          entry.target.classList.add('in-view-left');
        } else if (entry.target.classList.contains('right-text')) {
          entry.target.classList.add('in-view-right');
        }
      } else {
        if (entry.target.classList.contains('left-text')) {
          entry.target.classList.remove('in-view-left');
        } else if (entry.target.classList.contains('right-text')) {
          entry.target.classList.remove('in-view-right');
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Select all elements to be observed
  const targets = document.querySelectorAll('.left-text, .right-text');
  targets.forEach(target => observer.observe(target));
});





