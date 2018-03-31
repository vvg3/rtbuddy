import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LocationPage } from '../location/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  toAbout() {
    this.navCtrl.push(AboutPage);
  }

  toLocation(){
    this.navCtrl.push(LocationPage);
  }


}
