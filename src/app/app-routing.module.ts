import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './routeGuards/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'products', component: ProductsComponent, canActivate: [authGuard]},
  {path:'logout', component:LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
