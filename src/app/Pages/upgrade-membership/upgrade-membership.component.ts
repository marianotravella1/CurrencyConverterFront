// import { Component, inject } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { UserService } from '../../Services/user.service';
// import { SubscriptionService } from '../../Services/subscription.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-upgrade-membership',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './upgrade-membership.component.html',
//   styleUrl: './upgrade-membership.component.scss'
// })
// export class UpgradeMembershipComponent {
//   userService = inject(UserService);
//   subService = inject(SubscriptionService);

//   async upgradeSub(subId: number)
//   {
//     if (await this.userService.UpgradeSubscriptionById(subId))
//     {
//       Swal.fire({
//         icon: "success",
//         title: "Actualizaste tu suscripción!",
//         showConfirmButton: false,
//         timer: 1500
//       });
//     }
//   }

// }
