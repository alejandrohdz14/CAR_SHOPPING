import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public mostrarTabs:boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("se a tocado HOMeeE");
    this.mostrarTabs = false;
  }
  tab1Root = DashboardPage;
  tab2Root = ProfilePage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }


}
