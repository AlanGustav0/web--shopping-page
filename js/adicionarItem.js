import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");

export function adicionarItem(evento) {
  evento.preventDefault();

  if(item.value === ""){
    alert("Por favor insira um item!");
    return;
  }

  const itemDalista = criarItemDaLista(item.value);
  
  listaDeCompras.append(itemDalista);
  verificarListaVazia(listaDeCompras);
  verificarListaComprados(listaComprados);

  item.value = "";
}