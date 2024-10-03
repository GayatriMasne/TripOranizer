import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Correct import statement for RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shimla',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './shimla.component.html',
  styleUrl: './shimla.component.css'
})
export class ShimlaComponent {
  constructor(private router: Router) {}

  onBookNowClick() {
    console.log('Book Now clicked!');
    this.router.navigate(['/booking']);
  }
}

