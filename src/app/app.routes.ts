import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' } // Redirige a "about" por defecto
];
