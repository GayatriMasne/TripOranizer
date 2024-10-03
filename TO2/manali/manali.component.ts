import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router'; // Corrected import statement
import { BookingComponent } from '../booking/booking.component';


@Component({
  selector: 'app-manali',
  standalone: true,
  imports: [CommonModule, FormsModule,  RouterModule,BookingComponent],
  templateUrl: './manali.component.html',
  styleUrls: ['./manali.component.css']
})
export class ManaliComponent {
 /*  constructor(private router: Router) {}

  onBookNowClick() {
    console.log('Book Now clicked!');
    this.router.navigate(['/booking']);
  } */
}
