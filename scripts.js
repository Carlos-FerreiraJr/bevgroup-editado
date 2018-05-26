let efeito=document.querySelectorAll('a');
// funcao do hover
for(let i=0; i<efeito.length;i++){
    efeito[i].onmouseenter = function(){
        document.querySelector("a").style.color="orange";
    }
}
// efeito[1].onmouseleave = function(){
//     document.querySelector("a").style.color="white";
// }