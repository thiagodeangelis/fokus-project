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
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBtIcone = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer')

const musica = new Audio ('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPausa = new Audio('/sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3')
const timerFoco = 1500;
const timerDescansoCurto = 300;
const timerDescansoLongo = 900;


musica.loop = true;
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;


musicaFocoInput.addEventListener('change', () => {

    musica.paused ? musica.play() : musica.pause();
})


buttonFoco.addEventListener('click', () => {
 tempoDecorridoEmSegundos = 1500
    alterarContexto('foco');
    buttonFoco.classList.add('active');
});

buttonDescansoCurto.addEventListener('click', () => {
     tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto');
    buttonDescansoCurto.classList.add('active');
});

buttonDescansoLongo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo');
    buttonDescansoLongo.classList.add('active');
});


function alterarContexto(contexto) {
mostrarTempo()
    botoes.forEach(function (contexto) {
       
        
        contexto.classList.remove('active');
    })
    
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`); 
   
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


    const contagemRegressiva = () => {
        if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
         alert('Tempo Finalizado!')
         zerar()
         return
        }
        tempoDecorridoEmSegundos -= 1;
        mostrarTempo()
    }

    buttonStartPause.addEventListener('click', iniciarOuPausar)

    function iniciarOuPausar () {

        if(intervaloId){
           audioPausa.play()
            zerar()
            return
        }
         audioPlay.play();
        intervaloId = setInterval(contagemRegressiva, 1000)
        iniciarOuPausarBt.textContent = "Pausar"
       iniciarOuPausarBtIcone.setAttribute('src', `./imagens/pause.png`)
    }

    function zerar () {

        clearInterval(intervaloId)
        iniciarOuPausarBt.textContent = "Começar"
        iniciarOuPausarBtIcone.setAttribute('src', `./imagens/play_arrow.png`)
        intervaloId = null;
    }

    function mostrarTempo () {

        const tempo = new Date(tempoDecorridoEmSegundos*1000);
        const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
        tempoNaTela.innerHTML = `${tempoFormatado}`
    }

    mostrarTempo()