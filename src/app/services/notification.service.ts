import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastService: ToastrService
  ) { }

  successNotification(messageText: string, messageTitle: string = "Başarılı!") {
    this.toastService.success(messageText, messageTitle, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  errorNotification(messageText: string, messageTitle: string = "Hatalı!") {
    this.toastService.error(messageText, messageTitle, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  warningNotification(messageText: string, messageTitle: string = "Uyarı!") {
    this.toastService.warning(messageText, messageTitle, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }
}
