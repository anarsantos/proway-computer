import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent //já declarou porque usou-se --module
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
