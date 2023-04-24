import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CalculadoraModule } from "src/calculadora/calculadora.module";
import { NavModule } from "src/nav/nav.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalculadoraModule, NavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
