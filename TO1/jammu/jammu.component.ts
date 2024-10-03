import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Correct import statement for RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jammu',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './jammu.component.html',
  styleUrl: './jammu.component.css'
})
export class JammuComponent {
  constructor(private router: Router) {}

  onBookNowClick() {
    console.log('Book Now clicked!');
    this.router.navigate(['/booking']);
  }
}
