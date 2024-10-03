import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grouptrip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grouptrip.component.html',
  styleUrl: './grouptrip.component.css'
})
export class GrouptripComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Lonavala, Maharashtra.',
      imageSrc: 'assets/Lonavala.jpg',
      description: 'famous for their stunning views',
      routeLink: 'lonavala'
    },
    {
      name: 'Sandakphu Trek, Darjeeling',
      imageSrc: 'assets/Darjeeling.jpg',
      description: 'Sandakphu famous for Tracking',
      routeLink: 'goa'
    },
    {
      name: 'Shimla',
      imageSrc: 'assets/shimala.jpg',
      description: 'Shimla has been blessed with all the natural bounties.',
      routeLink: 'shimla'
    },
    {
      name: 'Jammu & Kashmir',
      imageSrc: 'assets/Jammu.jpg',
      description: 'Jammu and Kashmir is also famous for its scenic beauty.',
      routeLink: 'jammu'
    },
    {
      name: 'Munnar Kerala',
      imageSrc: 'assets/Munnar.jpg',
      description: 'Virgin forests, savannah, rolling hills, scenic valleys',
      routeLink: 'munner'
    },
    {
      name: 'Alleppey, Kerala',
      imageSrc: 'assets/Alleppey.jpg',
      description: 'Alappuzha, famous for its boat races, beaches.',
      routeLink: 'alleppey'
    },
    {
      name: 'Gangtok, Sikkim',
      imageSrc: 'assets/Gangtok.jpg',
      description: 'It has an amazing view of mount Kanchenjunga.',
      routeLink: 'gangtok'
    },
    {
      name: 'Coorg, Karnataka',
      imageSrc: 'assets/Coorg.jpg',
      description: 'It is very famous for its tea and coffee plantations in India.',
      routeLink: 'coorg'
    },
    {
      name: 'Pondicherry',
      imageSrc: 'assets/Pondicherry.avif',
      description: 'makes you fall in love - with its colonial structures.',
      routeLink: 'pondicherry'
    },
    {
      name: 'Shillong, Meghalaya',
      imageSrc: 'assets/shillong.webp',
      description: 'Shillong is famous for its green fields. ',
      routeLink: 'shillong'
    },
    // Add other places similarly
  ];

  redirectToNextPage(routeLink: string) {
    this.router.navigate([routeLink]);
  }
}
