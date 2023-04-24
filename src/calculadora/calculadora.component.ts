import { Component } from "@angular/core";
import { BotaoComponent } from "src/botao/botao.component";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"],
})
export class CalculadoraComponent {
  mode: boolean = false;

  modeOnOrOff(): void {
    if (this.mode == false) {
      this.displayCalc = "OFF";
    }
  }

  displayCalc: string = "";

  numeros(numero: number): void {
    if (this.mode == true) {
      if (this.displayCalc == "0") {
        this.displayCalc = "";
      }
      if (numero != 100) {
        this.displayCalc += `${numero}`;
      } else {
        this.displayCalc += ".";
      }
    }
  }
  operacoes(numero: number): void {
    if (this.mode == true) {
      if (numero == 1) {
        this.displayCalc += "+";
      } else if (numero == 2) {
        this.displayCalc += "-";
      } else if (numero == 3) {
        this.displayCalc += "/";
      } else if (numero == 4) {
        this.displayCalc += "*";
      }
    }
  }

  funcoesCalc(numero: number): void {
    if (numero == 1) {
      if (this.mode == true) {
        let tamanhoCalculo = this.displayCalc.length;
        this.displayCalc = this.displayCalc.substring(0, tamanhoCalculo - 1);
      }
    } else if (numero == 2) {
      if (this.mode == true) {
        this.displayCalc = "0";
      }
    } else if (numero == 3) {
      this.displayCalc = "";
      this.mode = false;
    } else if (numero == 4) {
      this.displayCalc = "0";
      this.mode = true;
    } else if (numero == 5) {
      const resultado = eval(this.displayCalc);
      this.displayCalc = resultado.toFixed(8).toString();
    }
  }
}
