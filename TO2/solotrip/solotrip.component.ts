import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solotrip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solotrip.component.html',
  styleUrl: './solotrip.component.css'
})
export class SolotripComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Hampi,Karnataka',
      imageSrc: 'assets/s11.jpg',
      description: 'Hampi is renowned for being a UNESCO World Heritage.',
      routeLink: 'hampi'
    },
    {
      name: 'Ladakh,India.',
      imageSrc: 'assets/s3.jpg',
      description: 'Buddhist Monasteries and festivals.',
      routeLink: 'ladakh'
    },
    {
      name: 'Manali,Himachal Pradesh.',
      imageSrc: 'assets/s33.jpg',
      description: ' Manali is one of the most popular hill ',
      routeLink: 'manali'
    },
    {
      name: 'Rajasthan.',
      imageSrc: 'assets/s4.jpg',
      description: 'This royal land is one of the most remarkable places.',
      routeLink: 'rajasthan'
    },
    {
      name: 'Kerala',
      imageSrc: 'assets/s5.jpg',
      description: 'Kerala is famous by the name of God’s own country.',
      routeLink: 'munner'
    },
    {
      name: 'Darjeeling',
      imageSrc: 'assets/s6.jpg',
      description: 'Darjeeling is a paradise for nature lovers',
      routeLink: 'darjeeling'
    },
    {
      name: 'Puducherry',
      imageSrc: 'assets/s7.jpg',
      description: 'Puducherry is one of the best places for your first solo trio to India.',
      routeLink: 'puducherry'
    },
    {
      name: 'Bandhavgarh National Park',
      imageSrc: 'assets/s8.jpg',
      
      routeLink: 'bandhavgarh'
    },
    {
      name: 'Pondicherry',
      imageSrc: 'assets/Pondicherry.avif',
      description: 'makes you fall in love - with its colonial structures.',
      routeLink: 'pondicherry'
    },
    {
      name: 'Gulmarg',
      imageSrc: 'assets/s10.jpeg',
      description: 'Gulmarg Gondola ride will be one of the fun experiences. ',
      routeLink: 'gulmarg'
    },
    // Add other places similarly
  ];

  redirectToNextPage(routeLink: string) {
    this.router.navigate([routeLink]);
  }
}

