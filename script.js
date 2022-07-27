let counter = 0
let element = document.querySelector('body div.container')
let animate = setInterval(function(){
  if(window.innerWidth == counter) {
    clearInterval(animate)
  }  
  element.style.transform = 'translate(-' + counter + 'px, 0)'
  console.log(counter)
  counter++
}, 10)