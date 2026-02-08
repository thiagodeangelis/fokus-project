const html = document.querySelector('html');
const buttonFoco = document.querySelector('.app__card-button--foco');
const buttonDescansoCurto = document.querySelector('.app__card-button--curto');
const buttonDescansoLongo = document.querySelector('.app__card-button--longo');
const buttonStartPause = document.querySelector('#start-pause');
const divTimer = document.querySelector('#timer');
const imagem = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');
const textoStrong = document.querySelector('.app__title-strong');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio ('/sons/luna-rise-part-one.mp3');
const timerFoco = 1500;
const timerDescansoCurto = 300;
const timerDescansoLongo = 900;
musica.loop = true;


musicaFocoInput.addEventListener('change', () => {

    musica.paused ? musica.play() : musica.pause();
})


buttonFoco.addEventListener('click', () => {

    alterarContexto('foco');
    buttonFoco.classList.add('active');
});

buttonDescansoCurto.addEventListener('click', () => {

    alterarContexto('descanso-curto');
    buttonDescansoCurto.classList.add('active');
});

buttonDescansoLongo.addEventListener('click', () => {

    alterarContexto('descanso-longo');
    buttonDescansoLongo.classList.add('active');
});


function alterarContexto(contexto) {

    botoes.forEach(function (contexto) {

        contexto.classList.remove('active');
    })
    
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `/imagens/${contexto}.png`); 
   
    switch (contexto) {
        case "foco":
         texto.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;

            case "descanso-curto":
                texto.innerHTML =
         `
    Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
    ` 

            break;

            case "descanso-longo":
         
            texto.innerHTML = `
    Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
    `
            break;
    
        default:
            break;
    }

    }
