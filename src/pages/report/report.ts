import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  templateUrl: 'report.html',
})
export class ReportPage {



  toggleCharged: boolean = false; 
  toggleEvidence: boolean = false; 
  toggleMedical: boolean = false; 
  toggleCounseling: boolean = false; 
  toggleRelocation: boolean = false; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

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
    var first_name = (<HTMLInputElement>document.getElementsByName("first_name")[1]).value;
    var last_name = (<HTMLInputElement>document.getElementsByName("last_name")[1]).value;
    var location = (<HTMLInputElement>document.getElementsByName("location")[1]).value;
    var misc = (<HTMLInputElement>document.getElementsByName("misc")[1]).value;
    var email = (<HTMLInputElement>document.getElementsByName("email")[1]).value;
    var phone = (<HTMLInputElement>document.getElementsByName("phone")[1]).value;


    // console.log("first name: " + first_name);
    // console.log("last name: " +last_name); 
    // console.log("Location: " + location); 
    // console.log("Other: " + misc); 
    // console.log("Email: " + email); 
    // console.log("Phone: " + phone);
    // console.log("Do you want evidence Collected? " + this.YorN(this.toggleEvidence)); 
    // console.log("Do you want Counseling? " + this.YorN(this.toggleCounseling)); 
    // console.log("Do you require Medical Attention " + this.YorN(this.toggleMedical)); 
    // console.log("Do you want to press Charges? " +this.YorN(this.toggleCharged));
    // console.log("Do you need Relocation? " + this.YorN(this.toggleRelocation)); 

    let form_object: [string, string, string, 
    string, string, string, 
    boolean, boolean, boolean,
     boolean, boolean]; 

    form_object = [first_name, last_name, location, 
    misc, email, phone, this.toggleCharged, 
    this.toggleEvidence, this.toggleMedical, 
    this.toggleCounseling, this.toggleRelocation];

    var url = "http://localhost:3030/SARAEmail"; 
    // var url = "http://bloodroot.cs.uky.edu:3030/SARAEmail"; 

    var method = "POST"; 
    var async = true; 

    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 

    this.http.post(url, form_object , {headers: headers})
    .map(res => res.json())
    .subscribe( data => {
      console.log(data);
    });
    

  }

  public YorN(x: boolean){
    if(x == true) {
      return "yes"; 
    } else {
      return "no";
    }
  }



}
