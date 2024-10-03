import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Correct import statement for RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-goa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Correct import for RouterModule
  templateUrl: './goa.component.html',
  styleUrls: ['./goa.component.css'] // Correct property name for styles
})
export class GoaComponent {
  constructor(private router: Router) {}

  onBookNowClick() {
    console.log('Book Now clicked!');
    this.router.navigate(['/booking']);
  }
}
