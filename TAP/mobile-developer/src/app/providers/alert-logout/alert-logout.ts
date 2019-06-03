// import { AlertController, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


/*
  Generated class for the AlertLogoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertLogoutProvider {

  constructor(
    private alertCtrl: AlertController,
    private router: Router) {
  }


  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      // header: 'Obrigado pela visita!',
      message: 'Você deseja encerrar o aplicativo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'Encerrar',
          handler: () => {
            
            this.router.navigateByUrl('/last');
          }
        }
      ]
    });

    await alert.present();
  }
  
}
