import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelorparty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bachelorparty.component.html',
  styleUrl: './bachelorparty.component.css'
})
export class BachelorpartyComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Manali',
      imageSrc: 'assets/manali.jpg',
      description: 'Manali is known for its unlimited adventure opportunities',
      routeLink: 'manali'
    },
    {
      name: 'Goa',
      imageSrc: 'assets/goa.avif',
      description: 'The state of Goa, in India, is famous for its beaches and places of worship.',
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

