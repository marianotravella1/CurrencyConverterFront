import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

export const soloLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.usuario?.token) return true;
  const url = router.parseUrl('/login');
  return new RedirectCommand(url);
};
