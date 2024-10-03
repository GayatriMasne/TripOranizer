import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Booking } from '../booking/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allbooking',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './allbooking.component.html',
  styleUrl: './allbooking.component.css'
})
export class AllbookingComponent {
  show:boolean=true;
  rest_url:string="http://localhost:5350";
  bkList:Booking[]=[
    {id:1,'name':'Ashwini','Birthdate':'22/05/2001','address':'Sangava','email':'ashwinighate28@gmail.com','phone_number':'9545434038','alternate_number':'95117247','aadharcard_no':'81234566', 'pancard_no':'NDUJ5456','destination':'Goa','hotelcategory':'3 Start','noofdays':'7 days','monthoftravel':'December','triptype':'Solo',adults:22,children:0,'startdate':'22/12/2023','enddate':'27/12/2023','from':'Pune','typeofpackage':'Customizable Package','timecall':'Anytime','touryouwant':'Adventure','additionalrequriment':'We Required list of popualr places'},
    {id:2,'name':'Surya','Birthdate':'23/10/2000','address':'Shegaon','email':'surya@gmail.com','phone_number':'9545434038','alternate_number':'965414457','aadharcard_no':'78543256', 'pancard_no':'FXOC963','destination':'Manali','hotelcategory':'5 Start','noofdays':'10 days','monthoftravel':'January','triptype':'Solo',adults:10,children:0,'startdate':'20/1/2024','enddate':'29/1/2024','from':'Pune','typeofpackage':'Customizable Package','timecall':'Anytime','touryouwant':'Adventure','additionalrequriment':'We Required list of popualr places'}

  ];
  constructor(private http:HttpClient){
  }
  getAll(){
    this.http.get<Booking[]>(this.rest_url+"/getAll/").subscribe(
     data=>{     
      console.log("got data");
      this.bkList=data;

     },
     err=>{
console.log("bookings not ");

     }

    )
  }
}
