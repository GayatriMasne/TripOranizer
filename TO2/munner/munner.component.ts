import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router'; // Corrected import statement


@Component({
  selector: 'app-munner',
  standalone: true,
  imports: [CommonModule, FormsModule,  RouterModule],
  templateUrl: './munner.component.html',
  styleUrl: './munner.component.css'
})
export class MunnerComponent {
  constructor(private router: Router) {}

  onBookNowClick() {
    console.log('Book Now clicked!');
    this.router.navigate(['/booking']);
  }
}
