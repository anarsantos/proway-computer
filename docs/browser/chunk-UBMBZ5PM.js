import{a as V}from"./chunk-Z2S7N3NV.js";import{a as W}from"./chunk-OZEJM2PW.js";import{d as I,g as T,h as E,i as U,k as H,n as Q,p as G,s as J,v as K}from"./chunk-AQRSP5T6.js";import"./chunk-XAZLOLJU.js";import{Ba as _,Fa as a,Ga as d,Ua as N,V as f,W as g,Ya as u,_ as w,a as j,ab as r,ac as B,b as k,bb as n,cb as h,cc as x,da as v,dc as L,ea as P,fb as D,kb as F,pb as c,qb as s,rb as X,sb as z,tb as A,ub as R,xb as b,yb as C}from"./chunk-GPBCBD5V.js";var Y=[{id:1,descricao:"Mouse gamer",preco:439,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-3.jpg",quantidadeEstoque:15},{id:2,descricao:"Monitor muito bom",preco:1200.5,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/monitor-1.jpg",quantidadeEstoque:10},{id:3,descricao:"Teclado excelente",preco:749.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/teclado-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Fone para quem joga FPS",preco:599.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-2.jpg",quantidadeEstoque:10},{id:5,descricao:"Fone de ouvido",preco:299.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-1.jpg",quantidadeEstoque:10},{id:6,descricao:"Fone de ouvido bom",preco:399.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/fone-de-ouvido-3.jpg",quantidadeEstoque:10},{id:7,descricao:"HD 1TB",preco:499.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/hd.jpg",quantidadeEstoque:10},{id:8,descricao:"Combo de placa de v\xEDdeos",preco:18449.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/placa-video.jpg",quantidadeEstoque:10},{id:9,descricao:"Processador Ryzen",preco:1e3,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/processador.jpg",quantidadeEstoque:10},{id:10,descricao:"Notebook bom",preco:2500,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/laptop-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Notebook excelente",preco:4500,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/laptop-2.jpg",quantidadeEstoque:10},{id:12,descricao:"Mouse barato",preco:20,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-1.png",quantidadeEstoque:10},{id:13,descricao:"Mouse \xF3timo",preco:200,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Mouse pequeno",preco:50,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/mouse-4.jpg",quantidadeEstoque:10},{id:15,descricao:"Teclado bom",preco:159.99,descricaoPreco:"\xC0 vista no PIX",imagem:"./assets/teclado-2.jpg",quantidadeEstoque:10}];var p=class o{produtos=Y;constructor(){}getAll(){return this.produtos}getOne(t){return this.produtos.find(e=>e.id===t)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=f({token:o,factory:o.\u0275fac,providedIn:"root"})};function ie(o,t){if(o&1&&(r(0,"div",2)(1,"a",3),h(2,"img",4),r(3,"h2",5),c(4),n(),r(5,"p",6),c(6),b(7,"currency"),n(),r(8,"p",7),c(9),n(),r(10,"p",8),c(11,"Comprar"),n()()()),o&2){let e=t.$implicit;a(),F("routerLink","/produtos/",e.id,""),a(),u("src",e.imagem,_),a(2),s(e.descricao),a(2),s(C(7,6,e.preco,"BRL")),a(3),s(e.descricaoPreco)}}var M=class o{constructor(t,e){this.produtosService=t;this.route=e}produtos;ngOnInit(){let t=this.produtosService.getAll();this.route.queryParamMap.subscribe(e=>{let i=e.get("descricao")?.toLowerCase();if(i){this.produtos=t.filter(l=>l.descricao.toLowerCase().includes(i));return}this.produtos=t})}static \u0275fac=function(e){return new(e||o)(d(p),d(I))};static \u0275cmp=v({type:o,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,i){e&1&&(r(0,"section",0),N(1,ie,12,9,"div",1),n()),e&2&&(a(),u("ngForOf",i.produtos))},dependencies:[B,T,x],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:20px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]})};var y=class o{constructor(t){this.snackBar=t}notificar(t){this.snackBar.open(t,"Ok",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}static \u0275fac=function(e){return new(e||o)(w(V))};static \u0275prov=f({token:o,factory:o.\u0275fac,providedIn:"root"})};var q=class o{constructor(t,e,i,l){this.produtosService=t;this.route=e;this.notificacaoService=i;this.carrinhoService=l}produto;quantidade=1;ngOnInit(){let t=this.route.snapshot.paramMap,e=Number(t.get("id"));this.produto=this.produtosService.getOne(e)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");let t=k(j({},this.produto),{quantidade:this.quantidade});this.carrinhoService.adicionarAoCarrinho(t)}static \u0275fac=function(e){return new(e||o)(d(p),d(I),d(y),d(W))};static \u0275cmp=v({type:o,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["for",""],["type","number","min","1",3,"ngModelChange","ngModel"],[1,"product__avaiability"],[3,"click"]],template:function(e,i){e&1&&(r(0,"section",0)(1,"div",1),h(2,"img",2),n(),r(3,"div",3)(4,"h2",4),c(5),n(),r(6,"h3",5),c(7),b(8,"currency"),n(),r(9,"p"),c(10,"Estoque dispon\xEDvel:"),n(),r(11,"label",6),c(12," Quantidade: "),r(13,"input",7),R("ngModelChange",function(O){return A(i.quantidade,O)||(i.quantidade=O),O}),n(),c(14," unidade(s) "),n(),r(15,"p",8),c(16),n(),r(17,"button",9),D("click",function(){return i.adicionarAoCarrinho()}),c(18,"Adicionar ao carrinho"),n()()()),e&2&&(a(2),u("src",i.produto==null?null:i.produto.imagem,_),a(3),s(i.produto==null?null:i.produto.descricao),a(2),s(C(8,5,i.produto==null?null:i.produto.preco,"BRL")),a(6),z("ngModel",i.quantidade),a(3),X(" ",i.produto==null?null:i.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[U,G,H,J,Q,x],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]})};var ne=[{path:"",component:M},{path:":id",component:q}],S=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=P({type:o});static \u0275inj=g({imports:[E.forChild(ne),E]})};var $=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=P({type:o});static \u0275inj=g({imports:[L,S,K]})};export{$ as ProdutosModule};
