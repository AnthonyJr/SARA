<<<<<<< HEAD
// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
=======
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Headers, Http} from '@angular/http'; 
import {HTTP} from '@ionic-native/http'; 
import {Md5} from 'ts-md5/dist/md5'; 
import {ReportPage} from '../report/report';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
>>>>>>> login


<<<<<<< HEAD
//   Generated class for the Login page.

//   See http://ionicframework.com/docs/v2/components/#navigation for more info on
//   Ionic pages and navigation.
=======
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
>>>>>>> login

// @Component({
//   selector: 'page-login',
//   templateUrl: 'login.html'
// })
// export class LoginPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {}

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginPage');
//   }



// }

<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Auth {
 
  public token: any;
 
  constructor(public http: Http, public storage: Storage) {
 
  }
 
  checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
 
            let headers = new Headers();
            headers.append('Authorization', this.token);
 
            this.http.get('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                }); 
 
        });         
 
    });
 
  }
 
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/register', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  logout(){
    this.storage.set('token', '');
  }
 
=======
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

>>>>>>> login
}
