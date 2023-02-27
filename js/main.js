const contenidojudy = document.getElementById('imagejudy')
const contenidochoco = document.getElementById('imagechoco')
const judy= document.getElementById('judy')
const choco= document.getElementById('choco')
const info1= document.getElementById('judynfo')
const info2= document.getElementById('chocoinfo')

let transformado = false;

    judy.addEventListener('click', () => {
        if (transformado) {
          info1.style.transform = 'translateY(100%)' 
          contenidojudy.style.filter = 'brightness(100%)' 
          transformado = false; 
        } else {
          info1.style.transform = 'translateY(0)'
          contenidojudy.style.filter='brightness(40%)'
          transformado = true; 
        }
      })

    choco.addEventListener('click', () => {
        if (transformado) {
          info2.style.transform = 'translateY(100%)'
          contenidochoco.style.filter = 'brightness(100%)' 
          transformado = false; 
        } else {
          info2.style.transform = 'translateY(0)'
          contenidochoco.style.filter='brightness(40%)'
          transformado = true; 
        }
      })