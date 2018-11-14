import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CervejaSelecionadaComponent } from './components/cerveja-selecionada/cerveja-selecionada.component';
import { CervejasComponent } from './components/cervejas/cervejas.component';
import { CervejaComponent } from './components/cerveja/cerveja.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CervejaSelecionadaComponent,
    CervejasComponent,
    CervejaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
