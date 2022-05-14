import {Injectable} from '@angular/core';

declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  showMessage(icon, title) {
    $(function() {
      Swal.fire({
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 3000
      });
    });
  }

  showErrorMessage(title){
    this.showMessage('error', title);
  }

  showSuccessMessage(tittle){
    this.showMessage('success', tittle);
  }
}
