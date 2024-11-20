import { Component, inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { SubscriptionService } from '../../Services/subscription.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upgrade-subscription',
  standalone: true,
  imports: [],
  templateUrl: './upgrade-subscription.component.html',
  styleUrl: './upgrade-subscription.component.scss',
})
export class UpgradeSubscriptionComponent {
  userService = inject(UserService);
  subService = inject(SubscriptionService);
  router = inject(Router);

  async upgradeSub(subId: number) {
    if (await this.userService.UpgradeSubscriptionById(subId)) {
      Swal.fire({
        icon: 'success',
        title: 'Actualizaste tu suscripción!',
        showConfirmButton: false,
        timer: 1500,
      });
      this.router.navigate(['/converter']);
    }
  }
}
