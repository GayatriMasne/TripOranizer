import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thingtodo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thingtodo.component.html',
  styleUrl: './thingtodo.component.css'
})
export class ThingtodoComponent {
  constructor(private router: Router) {} // Inject the Router in the constructor

  trips = [
    {
      title: 'Pre-wedding shoot',
      description: 'a short photo session with your wedding photographer',
      imageSrc: 'assets/Prewedding.jpg',
      routeLink: 'preweding'
    },
    {
      title: 'Birthday Trip',
      description: 'birthday photographs with your family and friend',
      imageSrc: 'assets/birthday.jpg',
      routeLink: 'birthdaypary'
    },
    {
      title: 'Maternity Shoot',
      description: 'Together with Patner',
      imageSrc: 'assets/matternaty.jpg',
      routeLink: 'maternitytrip'
    },
    {
      title: 'Bachelor parties',
      description: 'Traditionally, bachelor parties are exclusively ',
      imageSrc: 'assets/bacholerparty.webp',
      routeLink: 'bachelorparty'
    },
    {
      title: 'Camping Paryt',
      description: 'It is not the destination, it is the journey',
      imageSrc: 'assets/friends-camping.jpg',
      routeLink: 'campingparty'
    },
    {
      title: 'Cruise Party',
      description: 'Cruise ships are large passenger ships used mainly for vacationing.',
      imageSrc: 'assets/Boat-cruise.jpg',
      routeLink: 'cruise'
    },
    
  ];
  loadingCardIndex: number | null = null; // Track the index of the card being clicked

  redirectToNextPage(routeLink: string, index: number): void {
    this.loadingCardIndex = index;

    // Simulate a delay before redirecting
    setTimeout(() => {
      this.router.navigate([routeLink]);
      this.loadingCardIndex = null; // Reset loading state after navigation
    }, 900); // Adjust the delay time as needed
  }

}
