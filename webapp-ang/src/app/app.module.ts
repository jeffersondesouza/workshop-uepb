import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CervejaSelecionadaComponent } from './components/cerveja-selecionada/cerveja-selecionada.component';
import { CervejasComponent } from './components/cervejas/cervejas.component';
import { CervejaComponent } from './components/cerveja/cerveja.component';
import { CervejaApiService } from './services/cerveja-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CervejaSelecionadaComponent,
    CervejasComponent,
    CervejaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CervejaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
