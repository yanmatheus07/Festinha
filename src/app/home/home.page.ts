import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeAdulto: number = 0;
  quantidadeCrianca: number = 0;
  
  quantidadeSalgadinhos: number = 0;
  quantidadeRefrigerante: number = 0;
  quantidadeBolo: number = 0;

  totalConta: number = 0;

  constructor() {}

  adicionarAdulto() {
    this.quantidadeAdulto++;
    this.calcularTotalConta();
  }
  removerAdulto() {
    if(this.quantidadeAdulto > 0){
      this.quantidadeAdulto--;
      this.calcularTotalConta();
    }
  }
  adicionarCrianca() {
    this.quantidadeCrianca++;
    this.calcularTotalConta();
  }
  removerCrianca() {
    if(this.quantidadeCrianca > 0){
      this.quantidadeCrianca--;
      this.calcularTotalConta();
    }
  }

  calcularTotalConta(){
    this.quantidadeSalgadinhos = this.quantidadeAdulto*10 + this.quantidadeCrianca*7;
    this.quantidadeRefrigerante = this.quantidadeAdulto*0.4 + this.quantidadeCrianca*0.3;
    this.quantidadeBolo = this.quantidadeAdulto*0.1 + this.quantidadeCrianca*0.1;
  }
  

  limpar(){
    this.quantidadeAdulto = 0;
    this.quantidadeCrianca = 0;
    this.calcularTotalConta();
  }
}
