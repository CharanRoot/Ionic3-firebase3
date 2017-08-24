import { Component } from '@angular/core';
import { IonicPage, App, NavController, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private app: App, private navCtrl: NavController, private modalCtrl: ModalController, private auth: AuthProvider) {}
  logout(): void {
      this.auth.logout().then(() => {
       this.app.getRootNav().setRoot('auth-signin'); 
        });
    }
}
