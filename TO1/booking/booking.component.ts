import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Booking } from './booking';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit{
  
  rest_url: string = "http://localhost:5350";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Initialize component
  }

  BookingUser(myform: NgForm) {
    let newuser: any = myform.value;

    this.http.post<any>(this.rest_url + "/addBooking", newuser).subscribe(
      data => {
        alert("Booking completed!");
        this.router.navigate(['/payment']); // Navigate to payment page after successful booking
      },
      err => {
        alert("Booking failed!");
        console.error("Booking failed", err);
      }
    );
  }
}