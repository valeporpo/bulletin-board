let counter = 0
let element = document.querySelector('body div.container')
let elementWidth = element.offsetWidth
counter = elementWidth
element.style.transform = 'translateX(' + elementWidth + 'px)'
let animate = setInterval(translateToLeft, 10)

function translateToLeft() {
  element.style.transform = 'translateX(' + counter + 'px)'
  counter--
  if(counter < 0 && -window.innerWidth == counter) {
    goToRight()
  }  

}

function goToRight() {
    clearInterval(animate)
    element.style.transform = 'translateX(' + elementWidth+ 'px)'
    counter = elementWidth
    animate = setInterval(translateToLeft, 10)
}