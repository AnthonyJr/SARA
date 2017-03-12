import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Report page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  public isToggled: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');

  }

  public Show(){
  	console.log("Toggle is working.");
	var phone = document.getElementById('phone'); 
	var email = document.getElementById('email');
	if (phone.style.visibility === 'hidden'){
		phone.style.visibility = 'visible'; 
		email.style.visibility = 'visible';
	}  	else {
		phone.style.visibility = 'hidden'; 
		email.style.visibility = 'hidden'; 
	}

  var first_name = (<HTMLInputElement>document.getElementsByName("first_name")[1]).value;
  var last_name = (<HTMLInputElement>document.getElementsByName("last_name")[1]).value;
  var location = (<HTMLInputElement>document.getElementsByName("location")[1]).value;

  //var medical = (<HTMLInputElement>document.getElementsByName("medical")[1]).value; */




  //console.log(first_name);
  //console.log(last_name); 
  //console.log(location); 



  }



}
