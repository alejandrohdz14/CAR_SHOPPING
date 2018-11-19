import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { HttpProvider } from '../../providers/http/http';
import { Service } from '../../service/service.service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: ['login.scss']
})
export class LoginPage {

  user = {
          username:'',
          password:''
          }
  path = {path:'login'}
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: HttpProvider,
              public service: Service) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
	
    if(this.service.notNullValueLogin(this.user)){
		return;
	}
    this.http.login(this.path,this.user)
      .subscribe(data => {
        if(data.status >= 200 && data.status < 300){
            this.navCtrl.setRoot(TabsPage);
        }
        this.service.Alert(data.message,"OK para continuar");
        
        },error => {
          this.service.Alert("Error de conexion","Intente mas tarde");
          console.log(error);
        });
  }

  goToSignup(){
    this.navCtrl.push(RegisterPage);
  }

}
