
/* function pintar() {
   ele.style.backgroundColor = 'yellow'
 }
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);*/


const pintar = (verde, color = 'green') => {
  verde.style.backgroundColor = color
}

const ele = document.getElementById('ele1')
ele.addEventListener("click", () => pintar(ele, 'yellow'))