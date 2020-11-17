import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      { path: 'add', component: AgregarUsuariosComponent },
      { path: 'edit', component: EditarUsuariosComponent }
    ]
  },
  { path: 'articulos', component: ArticulosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
