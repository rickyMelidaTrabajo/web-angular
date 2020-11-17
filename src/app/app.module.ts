import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ArticulosDetallesComponent } from './components/articulos-detalles/articulos-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    ProductsComponent,
    MenuComponent,
    UsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ArticulosComponent,
    ArticulosDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
