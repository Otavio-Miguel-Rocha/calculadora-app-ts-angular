import { NgModule } from "@angular/core";
import { CalculadoraComponent } from "./calculadora.component";
import { CommonModule } from "@angular/common";
import { BotaoModule } from "src/botao/botao.module";

@NgModule({
  imports: [CommonModule, BotaoModule],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent],
})
export class CalculadoraModule {}
