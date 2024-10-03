import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placetogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placetogo.component.html',
  styleUrl: './placetogo.component.css'
})
export class PlacetogoComponent {
  constructor(private router: Router) {} // Inject the Router in the constructor

  trips = [
    {
      title: 'HoneyMoon Trip',
      description: 'Together with Patner',
      imageSrc: 'assets/img12.jpg',
      routeLink: 'honeymoontrip'
    },
    {
      title: 'Solo Trip',
      description: 'Feel the fear and do it anyway',
      imageSrc: 'assets/img34.jpg',
      routeLink: 'solotrip'
    },
    {
      title: 'Group Trip',
      description: 'With your family and friends',
      imageSrc: 'assets/img13.avif',
      routeLink: 'grouptrip'
    },
    {
      title: 'Camping',
      description: 'Life is Best Wher you are Camping',
      imageSrc: 'assets/img35.jpg',
      routeLink: 'camping'
    },
    {
      title: 'Road Trip',
      description: 'It is not the destination, it is the journey',
      imageSrc: 'assets/img37.webp',
      routeLink: 'roadtrip'
    },
    {
      title: 'Business Trip',
      description: 'make your business trip a grand success! ..',
      imageSrc: 'assets/img36.avif',
      routeLink: 'business'
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

