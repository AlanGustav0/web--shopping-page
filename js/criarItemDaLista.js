let contadorCheckbox = 2;
const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");


export function criarItemDaLista(item){
    const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("main__container__item__lista-container");

  const containerNomeDoItem = document.createElement("div");
  const containerNomeCompra = document.createElement("div");
  containerNomeCompra.classList.add(
    "main__container__item__lista-container__nome-compra"
  );

  containerNomeDoItem.appendChild(containerNomeCompra);

  // checkbox

  const containerCheckBox = document.createElement("div");
  containerCheckBox.classList.add(
    "main__container__item__lista-container__nome-compra__checkbox"
  );
  const checkBoxInput = document.createElement("input");
  checkBoxInput.type = "checkbox";

  checkBoxInput.classList.add("checkbox-input");
  checkBoxInput.id = `checkbox-"${contadorCheckbox++}`;

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.setAttribute("for", checkBoxInput.id);

  checkBoxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustomizado = evento.currentTarget.querySelector(
      ".checkbox-customizado"
    );
    const itemTitulo = evento.currentTarget
      .closest("li")
      .querySelector("#item-titulo");

    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      itemTitulo.style.textDecoration = "line-through";
      listaComprados.appendChild(itemDaLista);
    } else {
      checkboxCustomizado.classList.remove("checked");
      itemTitulo.style.textDecoration = "none";
      listaDeCompras.appendChild(itemDaLista);
    }
  });

  const checkBoxCustomizado = document.createElement("div");
  checkBoxCustomizado.classList.add("checkbox-customizado");
  checkBoxLabel.appendChild(checkBoxInput);
  checkBoxLabel.appendChild(checkBoxCustomizado);

  containerCheckBox.appendChild(checkBoxLabel);

  // end checkbox

  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo";

  nomeDoItem.innerHTML = item;
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
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "ícone editar";

  botaoRemover.appendChild(imagemRemover);
  botaoEditar.appendChild(imagemEditar);

  containerBotoes.appendChild(botaoRemover);
  containerBotoes.appendChild(botaoEditar);

  containerItemLista.appendChild(containerNomeDoItem);
  containerNomeCompra.appendChild(containerBotoes);

  containerItemLista.appendChild(containerNomeCompra);

  const itemData = document.createElement("p");
  itemData.innerText = `${new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
  })} (${new Date().toLocaleDateString()}) 
    às ${new Date().toLocaleTimeString("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    })}`;
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}