import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos; //serviço que terá acesso à lista de produtos

  constructor() { }

  getAll() { //retorna a lista de produtos
    return this.produtos;
  }

  getOne(produtoId: number) { //recebe o id do produto
    return this.produtos.find(produto => produto.id === produtoId);
  }
}
