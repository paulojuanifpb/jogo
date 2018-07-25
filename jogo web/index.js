const POSICAO_INICIAL = 300;
const TAMANHO_PULO = 150;


const POSICAO_CENARIO = 0;
const POSICAO_OBSTACULO = 1250;
const POSICAO_OBSTACULO2 = 150;



class Personagem{
  constructor(elemento, posicao){
    this.elemento = elemento;
    this.posicao = POSICAO_INICIAL;
  }

  pular(){
    this.posicao -= TAMANHO_PULO;
    this.atualizar();
    setTimeout( ok => {
        this.cair();
      }, 300);
  }

  cair(){
    this.posicao = POSICAO_INICIAL;
    this.atualizar();
  }

  atualizar(){
    
    this.elemento.style.top = this.posicao + "px";
  }

}


elementoPersonagem = document.getElementById("personagem");
personagem = new Personagem(elementoPersonagem);







class Cenario{
  constructor(elemento, posicao){
    this.elemento = elemento;
    this.posicao = POSICAO_CENARIO;
  }

  mover(){
    this.posicao -= 25;
    
    setInterval( ok => {
        this.atualizar();
      }, 100);
  }



  atualizar(){
   
    this.elemento.style.left = this.posicao + "px";
    if (this.posicao == -1000)
    this.posicao=POSICAO_CENARIO;
   
    
  }

}


ElementoCenario = document.getElementById("cenario");
cenario = new Cenario(ElementoCenario);

function teclado(){
  switch(event.keyCode){
    case 38: {
      
      personagem.pular();
      break;
    }
    case 40: {
      break;
    }
  }
}

function atualizasaoGame(){
  cenario.mover()
}

setInterval(atualizasaoGame,100);


class Obstaculo{
  constructor(elemento, posicao){
    this.elemento = elemento;
    this.posicao = POSICAO_CENARIO;
  }

  andar(){
    this.posicao -= 10;
    
    setInterval( ok => {
        this.atualizar();
      }, 100);
  }



  atualizar(){
   
    this.elemento.style.left = this.posicao + "px";
    if (this.posicao == -90)
    this.posicao= POSICAO_OBSTACULO;
   
    
  }

}


ElementoObstaculo = document.getElementById("obstaculo");

obstaculo = new Obstaculo(ElementoObstaculo);



function moverObs(){
  obstaculo.andar();
}


setInterval( moverObs, 20);


function colisao(){
  if(personagem.posicao == obstaculo.posicao + 300){
    alert("Bateu");
    location.reload();
  }
}



setInterval(colisao, 20);

let pontuacaoGame = 0;
let pontos = document.getElementById("pontos");

function pontuacao(){
  pontuacaoGame += 1;
  pontos.innerHTML = pontuacaoGame;
  console.log('pontos')
}

setInterval(pontuacao, 150);


