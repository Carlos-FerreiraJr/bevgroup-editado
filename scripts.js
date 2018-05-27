let efeito = document.querySelectorAll('.contatoLink');
let buttonEnter = document.querySelector('#botaoEntrar');
let buttonCad = document.querySelector('#botaoCad');
let image = document.querySelectorAll('.imagens-section');
// funcao do hover links
for(let i=0; i<efeito.length;i++){
    efeito[i].onmouseenter = function(){
        this.style.color="orange";
    }
    efeito[i].onmouseleave = function(){
        this.style.color="grey";
    }
}
// opacidade
for(let i=0;i<image.length;i++){
    image[i].onmouseenter = function(){
        this.style.opacity = "0.5";
    }
    image[i].onmouseleave = function(){
        this.style.opacity = "1";
    }
}
// botao entrar cores
buttonEnter.onmouseenter = function(){
    this.style.color="orange";
}
buttonEnter.onmouseleave = function(){
    this.style.color="white";
}
//  botao cadastrar cores
buttonCad.onmouseenter = function(){
    this.style.color="black";
}
buttonCad.onmouseleave = function(){
    this.style.color="white";
}

