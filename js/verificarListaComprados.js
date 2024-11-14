const mensagemListaVaziaComprado = document.getElementById("mensagem-lista-comprados");

export function verificarListaComprados(lista){

    if(lista.querySelectorAll("li").length === 0){
        mensagemListaVaziaComprado.style.display = "block";
    }else{
        mensagemListaVaziaComprado.style.display = "none";
    }
}