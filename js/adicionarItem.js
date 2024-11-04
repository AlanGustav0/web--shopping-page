import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
  evento.preventDefault();

  const itemDalista = criarItemDaLista(item.value);
  
  listaDeCompras.append(itemDalista);
  verificarListaVazia(listaDeCompras);
}