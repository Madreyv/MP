var opcaoMenu = document.getElementsByClassName("opcaoMenu");
var descricaoFuncionario = document.getElementsByClassName('descricaoFuncionario');
var cubo = document.getElementById('cubo');
var grau = 0;

console.log(opcaoMenu.active);
window.onscroll = scroll;

function scroll () {
	var menu = document.getElementById('topBar'); 
    window.addEventListener('scroll', function () {

        console.log(opcaoMenu);
        if (screen.width <= 375) {

            if (window.scrollY < 3513) opcaoMenu[0].classList.add('active'); 
            else opcaoMenu[0].classList.remove('active');

            if (window.scrollY >= 3513 && window.scrollY < 4951) opcaoMenu[1].classList.add('active');
            else opcaoMenu[1].classList.remove('active');
            
            if (window.scrollY >= 4951 ) opcaoMenu[2].classList.add('active');
            else opcaoMenu[2].classList.remove('active');

        }else{
            if (window.scrollY > 89) menu.classList.add('posicaoFixa'); 
            else menu.classList.remove('posicaoFixa');

            if (window.scrollY >= 200 && window.scrollY <= 999){
                opcaoMenu[0].classList.add('active');
            }else{
                opcaoMenu[0].classList.remove('active');
            }

            if (window.scrollY >= 1000  && window.scrollY <= 1240 ){
                opcaoMenu[1].classList.add('active');
            }else{
                opcaoMenu[1].classList.remove('active');
            } 

            if (window.scrollY >= 1240 ){
                opcaoMenu[2].classList.add('active');
            }else{
                opcaoMenu[2].classList.remove('active');
            }

        }
         
    });
}

function motor() {
  var timer = setTimeout( function() {

  	cubo.style.transform = "rotateX(-3deg) rotateY(" + grau++ + "deg)";
    if( grau == 90) {
    	trocar(descricaoFuncionario, 1);
    }

    if ( grau == 180 ) {
    	trocar(descricaoFuncionario, 2);
    }

    if (grau == 270) {
    	trocar(descricaoFuncionario, 3);
    }

    if (grau == 360) {
    	trocar(descricaoFuncionario, 0);
    	grau = 0;
    }

    motor();

  }, 100 );
}

function trocar(elementos, indiceQueVaiMostrar){
	console.log(elementos.length);
	for (var i = 0; i < elementos.length; i++) {
		if (!(elementos[i].classList.contains("esconder"))) {
			console.log(elementos[i]);
			elementos[i].classList.remove("mostrar");
			elementos[i].classList.add("esconder");
		}
	}

	elementos[indiceQueVaiMostrar].classList.remove("esconder");
	elementos[indiceQueVaiMostrar].classList.add("mostrar");
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
//motor();