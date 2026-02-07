const html = document.querySelector('html');
const buttonFoco = document.querySelector('.app__card-button--foco');
const buttonDescansoCurto = document.querySelector('.app__card-button--curto');
const buttonDescansoLongo = document.querySelector('.app__card-button--longo');
const buttonStartPause = document.querySelector('#start-pause');
const divTimer = document.querySelector('#timer');
const imagem = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');
const textoStrong = document.querySelector('.app__title-strong');
const timerFoco = 1500;
const timerDescansoCurto = 300;
const timerDescansoLongo = 900;




// O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
// O elemento HTML onde as frases de cada contexto irão trocar de posição.


buttonFoco.addEventListener('click', () => {

    alterarContexto('foco');
});

buttonDescansoCurto.addEventListener('click', () => {

    alterarContexto('descanso-curto');
});

buttonDescansoLongo.addEventListener('click', () => {

    alterarContexto('descanso-longo');
});


function alterarContexto(contexto) {
    
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `/imagens/${contexto}.png`)
}

