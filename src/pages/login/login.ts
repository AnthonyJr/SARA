import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Headers, Http} from '@angular/http'; 
import {HTTP} from '@ionic-native/http'; 
import {Md5} from 'ts-md5/dist/md5'; 
import {ReportPage} from '../report/report';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html', 
  providers: [HTTP]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public Login() {
    var username = (<HTMLInputElement>document.getElementsByName("username")[1]).value;
    var password = (<HTMLInputElement>document.getElementsByName("password")[1]).value;

    // jsco224
    //SARAtest
    //password

    var url = "https://luna-app.000webhostapp.com/api/v1/auth.php?username="+ username +"&pass=" + password; 
    this.http.get(url, {}, {}).then(data => {
      console.log(data.status); 
      console.log(data.data);
      var Obj = JSON.parse(data.data); 
      console.log(Obj.error); 
      console.log(data.headers);
      if(data.status == 200 && Obj.error == false && Obj.message == "User successfully logged in") {
        this.navCtrl.push(ReportPage, {param1: username, param2: password, param3: true}); 
      } else {
        alert("Wrong username / password combination"); 
      }

    }).catch(error => {
      console.log("bad"); 
      console.log(error.status); 
      console.log(error.error); 
      console.log(error.headers); 
    }); 


  }

  public SkipLogin(){

    this.navCtrl.push(ReportPage, {param1: null, param2: null, param3: false})


  }

}
