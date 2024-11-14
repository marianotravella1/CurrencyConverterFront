import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if(!authService.usuario) return true;
  const url = router.parseUrl('/converter');
  return new RedirectCommand(url);
};
