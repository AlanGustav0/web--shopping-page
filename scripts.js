const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");


botaoSalvarItem.addEventListener("click",adicionarItem);


function adicionaCheckbox(){
    
}

function adicionarItem(evento){
    evento.preventDefault();
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("main__container__item__lista-container");

    const containerNomeDoItem = document.createElement("div");
    const containerNomeCompra = document.createElement("div");
    containerNomeCompra.classList.add("main__container__item__lista-container__nome-compra");

    containerNomeDoItem.appendChild(containerNomeCompra);

    // checkbox
    let contadorCheckbox = 1;

    const containerCheckBox = document.createElement("div");
    containerCheckBox.classList.add("main__container__item__lista-container__nome-compra__checkbox");
    const checkBoxInput = document.createElement("input");
    checkBoxInput.type = "checkbox";

    checkBoxInput.classList.add("checkbox-input");
    checkBoxInput.id = `checkbox-${contadorCheckbox++}`

    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for",checkBoxInput.id);

    const checkBoxCustomizado = document.createElement("div");
    checkBoxCustomizado.classList.add("checkbox-customizado");
    checkBoxLabel.appendChild(checkBoxInput);
    checkBoxLabel.appendChild(checkBoxCustomizado);

    containerCheckBox.appendChild(checkBoxLabel);
    

    // end checkbox
    
    const nomeDoItem = document.createElement("p");

    nomeDoItem.innerHTML = item.value;
    containerCheckBox.appendChild(nomeDoItem);
    containerNomeCompra.appendChild(containerCheckBox);
    

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("main__container__item--botao-acao");

    const botaoEditar = document.createElement("button");
    botaoRemover.classList.add("main__container__item--botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "ìcone deletar";

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg"
    imagemEditar.alt = "ícone editar";

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);

    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerNomeCompra.appendChild(containerBotoes);

    containerItemLista.appendChild(containerNomeCompra);
    
    itemDaLista.appendChild(containerItemLista);

    listaDeCompras.append(itemDaLista); 
}



