import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { ConverterComponent } from './Pages/converter/converter.component';
import { ConversionHistoryComponent } from './Pages/conversion-history/conversion-history.component';
import { CurrenciesComponent } from './Pages/currencies/currencies.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { soloLoggedGuard } from './Guards/solo-logged.guard';
import { soloPublicoGuard } from './Guards/solo-publico.guard';
import { UpgradeSubscriptionComponent } from './Pages/upgrade-subscription/upgrade-subscription.component';

export const routes: Routes = [
  {
    path: 'converter',
    component: ConverterComponent,
    canActivate: [soloLoggedGuard],
  },
  {
    path: 'conversion-history',
    component: ConversionHistoryComponent,
    canActivate: [soloLoggedGuard],

  },
  {
    path: 'upgrade-subscription',
    component: UpgradeSubscriptionComponent,
    canActivate: [soloLoggedGuard],

  },
  {
    path: 'currencies',
    component: CurrenciesComponent,
    canActivate: [soloLoggedGuard],

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [soloPublicoGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [soloPublicoGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
