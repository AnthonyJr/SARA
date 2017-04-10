import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http'; 
import {Md5} from 'ts-md5/dist/md5'; 
import {ReportPage} from '../report/report';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public Login() {
  	console.log("Login"); 
    var username = (<HTMLInputElement>document.getElementsByName("username")[1]).value;
    var password = (<HTMLInputElement>document.getElementsByName("password")[1]).value;

    // jsco224
    //SARAtest
    //password

    var Login = true; 

   var hash_username =  Md5.hashStr(username); 
   this.navCtrl.push(ReportPage, {param1: hash_username, param2: Login});
  }

}
