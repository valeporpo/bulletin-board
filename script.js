let counter = 0, animate
let element = document.querySelector('body div.container')
let elementWidth = element.offsetWidth

startAnimation()

function translateToLeft() {
  setTranslateX(counter)
  counter--
  if(counter < 0 && -window.innerWidth == counter) {
    goToRight()
  }
}

function goToRight() {
    clearInterval(animate)
    setTranslateX(elementWidth)
    counter = elementWidth
    animate = setInterval(translateToLeft, 10)
}

function setTranslateX(px) {
   element.style.transform = 'translateX(' + px + 'px)'
}

function startAnimation() {
    goToRight()
}