import { Component, Output, EventEmitter, Input } from "@angular/core";
@Component({
  selector: "app-botao",
  templateUrl: "./botao.component.html",
  styleUrls: ["./botao.component.css"],
})
export class BotaoComponent {
  @Output()
  clickBotao = new EventEmitter();

  @Input()
  larguraPadrao = "";

  @Input()
  alturaPadrao = "";

  @Input()
  conteudo = "";

  @Input()
  fontSize = "";

  @Input()
  backgroundColor = "";

  botao(): void {
    this.clickBotao.emit();
  }
}
