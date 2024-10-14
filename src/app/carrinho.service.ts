import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []; //conter todos os itens do carrinho

  constructor() {
    this.itens = this.obtemCarrinho();
  }

  //métodos que estarão no serviço: adicionar, limpar e obter as informações.
  obtemCarrinho(): IProdutoCarrinho[] { //salvar as informações no local storage
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); //vem como string e precisa tranformar em obj.
    return this.itens;
  }

  adicionarAoCarrinho(produto:IProdutoCarrinho) {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); //converte de obj p/ string
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
