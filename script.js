let counter = 0, animate
let container = document.querySelector('body div.container')
let element = document.querySelector('body div.container div.contained')

startAnimation()

// Trasla di un pixel verso sx
function translateToLeft() {
  setTranslateX(element, counter)
  counter--
  
  // Se translateX (in negativo) è pari alla larghezza del padre
  if(getTranslateX(element) == -container.offsetWidth) {
    goToRight()
  }

}

// Resetta
function goToRight() {
    clearInterval(animate)
    // Trasla l'elemento verso dx, in modo che inizi nel punto
    // dove finisce il padre
    counter = element.offsetWidth
    setTranslateX(element, counter)
    animate = setInterval(translateToLeft, 10)
}

function setTranslateX(el, px) {
   el.style.transform = 'translateX(' + px + 'px)'
}

function getTranslateX(el) {
    let style = window.getComputedStyle(el)
    let matrix = new WebKitCSSMatrix(style.transform)
    return matrix.m41
 }

function startAnimation() {
    goToRight()
}