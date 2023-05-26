let cabAcordeon = document.getElementsByClassName("cabAcordeon");
let contenido = document.getElementsByClassName("contenido");
let circulo = document.getElementsByClassName("circulo");


for (let i = 0; i < cabAcordeon.length; i++) {
    cabAcordeon[i].addEventListener("click", function () {
        contenido[i].classList.toggle("animacionContenido");
        let alturaContenido = contenido[i].clientHeight;
        if (alturaContenido > 0) {//ff2f2fcb
            circulo[i].style.backgroundColor = "#e5ff00";
        }else {
            circulo[i].style.backgroundColor = "#e5ff00"; 
        }
    });
}


var mainDiv = document.getElementById('main-button');
mainDiv.addEventListener('click', function(){
  this.children.item(0).classList.toggle('fa-times');
  this.classList.toggle('open');
});

/**/


const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;


let countDown = new Date('June 1, 2023 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('dias').innerText = Math.floor(distance / (day)),
        document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)

    document.getElementById('dias').innerText = (0),
    document.getElementById('horas').innerText = (0),
    document.getElementById('minutos').innerText = (0),
    document.getElementById('segundos').innerText = (0);

      document.getElementById('diass').innerText = (0),
    document.getElementById('horass').innerText = (0),
    document.getElementById('minutoss').innerText = (0),
    document.getElementById('segundoss').innerText = (0);
