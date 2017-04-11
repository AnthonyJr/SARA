import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {SocialSharing } from '@ionic-native/social-sharing'; 
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import {Http, Headers} from '@angular/http'; 




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

  myDate: string; 
  location:string;

  toggleCharged: boolean = false; 
  toggleEvidence: boolean = false; 
  toggleMedical: boolean = false; 
  toggleCounseling: boolean = false; 
  toggleRelocation: boolean = false; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');

  }

  public Show(){
	var phone = document.getElementById('phone'); 
	var email = document.getElementById('email');

  phone.style.visibility = 'visible'; 
  email.style.visibility = 'visible';




  //var medical = (<HTMLInputElement>document.getElementsByName("medical")[1]).value; *
  }

  public Hide(){
    var phone = document.getElementById('phone'); 
    var email = document.getElementById('email');

    phone.style.visibility = 'hidden'; 
    email.style.visibility = 'hidden';   
  }

  public ToggleCharged(){
    console.log("ToggleCharged Loading...."); 
    if(this.toggleCharged == false) {
      this.toggleCharged = true;
      console.log(this.toggleCharged); 
      if(this.toggleCharged == true || this.toggleCounseling == true || this.toggleEvidence == true || this.toggleMedical == true || this.toggleRelocation == true) {
        this.Show(); 
      }
    } else {
      this.toggleCharged = false; 
      console.log(this.toggleCharged);
      if(this.toggleCharged == false && this.toggleCounseling == false && this.toggleEvidence == false && this.toggleMedical == false && this.toggleRelocation == false) {
        this.Hide();
      }
    }

  }

  public ToggleEvidence(){
    console.log("ToggleEvidence Loading...."); 
    if(this.toggleEvidence == false) {
      this.toggleEvidence = true;
      console.log(this.toggleEvidence); 
      if(this.toggleCharged == true || this.toggleCounseling == true || this.toggleEvidence == true || this.toggleMedical == true || this.toggleRelocation == true) {
        this.Show(); 
      }
    } else {
      this.toggleEvidence = false; 
      console.log(this.toggleEvidence);
      if(this.toggleCharged == false && this.toggleCounseling == false && this.toggleEvidence == false && this.toggleMedical == false && this.toggleRelocation == false) {
        this.Hide();
      }
    }

  }

  public ToggleMedical(){
    console.log("ToggleMedical Loading...."); 
    if(this.toggleMedical == false) {
      this.toggleMedical = true;
      console.log(this.toggleMedical); 
      if(this.toggleCharged == true || this.toggleCounseling == true || this.toggleEvidence == true || this.toggleMedical == true || this.toggleRelocation == true) {
        this.Show(); 
      }
    } else {
      this.toggleMedical = false; 
      console.log(this.toggleMedical);
      if(this.toggleCharged == false && this.toggleCounseling == false && this.toggleEvidence == false && this.toggleMedical == false && this.toggleRelocation == false) {
        this.Hide();
      }
    }

  }

  public ToggleCounsel(){
    console.log("ToggleCounsel Loading...."); 
    if(this.toggleCounseling == false) {
      this.toggleCounseling = true;
      console.log(this.toggleCounseling); 
      if(this.toggleCharged == true || this.toggleCounseling == true || this.toggleEvidence == true || this.toggleMedical == true || this.toggleRelocation == true) {
        this.Show(); 
      }
    } else {
      this.toggleCounseling = false; 
      console.log(this.toggleCounseling);
      if(this.toggleCharged == false && this.toggleCounseling == false && this.toggleEvidence == false && this.toggleMedical == false && this.toggleRelocation == false) {
        this.Hide();
      }
    }

  }

  public ToggleRelocate(){
    console.log("ToggleRelocate Loading...."); 
    if(this.toggleRelocation == false) {
      this.toggleRelocation = true;
      console.log(this.toggleRelocation); 
      // create alert to call womens shelter
      //phone number: 859.259.1974
      // email: 
      if(this.toggleCharged == true || this.toggleCounseling == true || this.toggleEvidence == true || this.toggleMedical == true || this.toggleRelocation == true) {
        this.Show(); 
      }
    } else {
      this.toggleRelocation = false; 
      console.log(this.toggleRelocation);
      if(this.toggleCharged == false && this.toggleCounseling == false && this.toggleEvidence == false && this.toggleMedical == false && this.toggleRelocation == false) {
        this.Hide();
      }
    }

  }


  public SubmitForm(){
    var date = this.myDate;
    var location = this.location;
    var username = this.navParams.get('param1'); 
    var login = this.navParams.get('param2'); 
    var first_name = (<HTMLInputElement>document.getElementsByName("first_name")[1]).value;
    var last_name = (<HTMLInputElement>document.getElementsByName("last_name")[1]).value;
    var misc = (<HTMLInputElement>document.getElementsByName("misc")[1]).value;
    var email = (<HTMLInputElement>document.getElementsByName("email")[1]).value;
    var phone = (<HTMLInputElement>document.getElementsByName("phone")[1]).value;



    var form_object = { 
      username: username,  
      login: login, 
      firstname: first_name, 
      lastname: last_name, 
      date: date, 
      location: location, 
      misc: misc, 
      email: email, 
      phone: phone, 
      toggleCharged: this.toggleCharged, 
      toggleEvidence: this.toggleEvidence, 
      toggleMedical: this.toggleMedical, 
      toggleCounseling: this.ToggleCounsel, 
      toggleRelocation: this.toggleRelocation}; 

    if(this.toggles() == true) {
      if(email == '' && phone == '') {
        console.log("error- now email or phone # given"); 
        this.customalert("Please give a email or phone number"); 
      } else {
        this.POST(form_object); 
      }
    } else {
      this.POST(form_object); 
    } 

  }

  public YorN(x: boolean){
    if(x == true) {
      return "yes"; 
    } else {
      return "no";
    }
  }

  public toggles(){
    if(this.toggleEvidence == true || this.toggleCounseling == true || 
      this.toggleMedical == true || this.toggleRelocation == true || this.toggleCharged == true) {
      return true; 
    } else {
      return false
    }
  }

  public POST(x: Object){
    var url = "http://bloodroot.cs.uky.edu:3030/SARAEmail"; 
    var method = "POST";
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 

    this.http.post(url, x , {headers: headers})
    .map(res => res.json())
    .subscribe( data => {
      console.log(data);
    });

  }

  public customalert(s: string){
    console.log("we in function)");
    let alert = this.alertCtrl.create({
      title: 'Error', 
      subTitle: s, 
      buttons: ['OK']
    });

    alert.present(alert); 
  }



}
