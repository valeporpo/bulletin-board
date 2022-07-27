let counter = 0
let element = document.querySelector('body div.container')
let animate = setInterval(translateToTheRight, 10)

function translateToTheRight(){
  if(window.innerWidth == counter) {
    clearInterval(animate)
  }  
  element.style.transform = 'translate(-' + counter + 'px, 0)'
  counter++
}