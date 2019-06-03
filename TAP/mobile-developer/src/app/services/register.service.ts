import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(
    private db: AngularFirestore,
    private router: Router,
    private alertController: AlertController
  ) {
  }


  register(user: User) {
    return this.db.collection('user').add(user)
      .then(result => {
        this.presentAlert("Parabéns!!","Sua visita foi registrada com sucesso")
        this.router.navigateByUrl('/search')
      })
      .catch(error => {
        this.presentAlert("Opa! Ocorreu um erro!","Tente novamente mais tarde")
      })

  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }


}
