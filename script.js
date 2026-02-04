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

    html.setAttribute('data-contexto', 'foco');
    imagem.setAttribute('src', '/imagens/foco.png');
});

buttonDescansoCurto.addEventListener('click', () => {

    html.setAttribute('data-contexto', 'descanso-curto');
    imagem.setAttribute('src', '/imagens/descanso-curto.png');
});

buttonDescansoLongo.addEventListener('click', () => {

    html.setAttribute('data-contexto', 'descanso-longo');
    imagem.setAttribute('src', '/imagens/descanso-longo.png');
});

