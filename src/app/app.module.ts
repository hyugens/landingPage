import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InformationComponent } from './components/information/information.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    InformationComponent,
    ProductosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
