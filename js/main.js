const contenidojudy = document.getElementById('imagejudy')
const contenidochoco = document.getElementById('imagechoco')
const letter=document.querySelectorAll('.letter')
const judy= document.getElementById('judy')
const choco= document.getElementById('choco')
const info1= document.getElementById('judynfo')
const info2= document.getElementById('chocoinfo')
const mode=document.getElementById('mode')
//const mainCont=document.getElementById('main-container')
const encabezado=document.querySelector('.encabezado')

let transformado = false;
let darkmode=false;

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

      mode.addEventListener('click', () => {

        if (mode.classList.contains("normalmode")) {
          mode.classList.remove("normalmode");
          mode.classList.add("darkmode");
          encabezado.classList.add("darkmodecont");
          letter[0].classList.add("letterdark");
          letter[1].classList.add("letterdark");
          judy.classList.add("darkmodecont")
          choco.classList.add("darkmodecont")
          document.body.style.background=('rgb(33,33,33)')
        } else {
          mode.classList.remove("darkmode");
          mode.classList.add("normalmode");
          encabezado.classList.remove("darkmodecont");
          document.body.style.background=('rgb(235, 235, 235)')
          letter[0].classList.remove("letterdark");
          letter[1].classList.remove("letterdark");
          judy.classList.remove("darkmodecont")
          choco.classList.remove("darkmodecont")
        }
      })