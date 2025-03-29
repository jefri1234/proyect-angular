import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { routes } from './app.routes';  // Importa las rutas definidas

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';  // Asegúrate de importar todos los componentes que usas

@NgModule({

  //esto dice a Angular que los componentes existen y que se debe 
  //cargar cuando se necesiten 
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ProductComponent  // Declara/registra todos los components que vas usar en tu app
  ],

  //Esto dice a Angular que módulos o librerías 
  //necesitas para que tu app funcione
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Activa el enrutamiento con las rutas definidas
  ],

  //Esto dice a Angular que servicios o proveedores 
  //necesitas para que tu app funcione
  providers: [],

  //Esto dice a Angular que componentes 
  //debe cargar al iniciar la app
  //DEFINES EL COMPONENT PRINCIPAL 
  bootstrap: [AppComponent]
})



export class AppModule { }
