import { Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'recuperarcontra',
    loadChildren: () => import('./recuperarcontra/recuperarcontra.module').then(m => m.RecuperarcontraPageModule)
  },
];
