import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  PaymentUser(myform:NgForm){
    console.log("GOT DATA =");
    let newuser:any=myform.value;
    console.log(myform.controls['name'].value);
    console.log(myform.controls['email_address'].value);
    console.log(myform.controls['amount'].value);
    console.log(myform.controls['card_no'].value);
    console.log(newuser);
      

    
  }
}
