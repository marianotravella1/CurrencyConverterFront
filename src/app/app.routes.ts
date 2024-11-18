import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ConverterComponent } from './Pages/converter/converter.component';
import { ConversionHistoryComponent } from './Pages/conversion-history/conversion-history.component';
import { CurrenciesComponent } from './Pages/currencies/currencies.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { soloAdminGuard } from './Guards/solo-admin.guard';
import { soloLoggedGuard } from './Guards/solo-logged.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'converter',
    component: ConverterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'conversion-history',
    component: ConversionHistoryComponent,
  },
  {
    path: 'currencies',
    component: CurrenciesComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '*',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
