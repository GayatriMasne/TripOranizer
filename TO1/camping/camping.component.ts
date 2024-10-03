import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Correct import statement for RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-camping',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './camping.component.html',
  styleUrl: './camping.component.css'
})
export class CampingComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Rann of Kutch',
      imageSrc: 'assets/rannofkutchcamp.jpg',
      description: 'It is famous for its white salty desert sand ',
      routeLink: 'rann'
    },
    {
      name: 'Goa',
      imageSrc: 'assets/goa.avif',
      description: 'The state of Goa, in India, is famous for its beaches ',
      routeLink: 'goa'
    },
    {
      name: 'Jaisalmer',
      imageSrc: 'assets/Jaisalmercamp.jpg',
      description: 'Jaisalmer, the Golden City, is known for its Fort rajwada.',
      routeLink: 'shimla'
    },
    {
      name: 'Tso Moriri',
      imageSrc: 'assets/tsomoriricamp.jpg',
      description: 'one of the most beautiful, calm and sacred (for ladakhis)',
      routeLink: 'moriri'
    },
    {
      name: 'Rishikesh',
      imageSrc: 'assets/rishikeshcamp.jpg',
      description: '>Rishikesh is commonly referred to as the yoga capital of the world',
      routeLink: 'rishikesh'
    },
    {
      name: 'Chandratal Lake',
      imageSrc: 'assets/Chandratalcamp.jpg',
      description: 'Chandratal Lake Trek is a moderate trek. Trekking in Chandratal Lake.',
      routeLink: 'chandratal'
    },
    {
      name: 'Sam Sand Dunes',
      imageSrc: 'assets/samsanddunescamp.jpg',
      description: 'Sam sand dunes,the most authentic desert dune site in  India',
      routeLink: 'gangtok'
    },
    {
      name: 'Anjuna beach',
      imageSrc: 'assets/anjunaBeachcamp.jpg',
      description: 'Anjuna is famous for trance parties held on its beach during the tourist season',
      routeLink: 'coorg'
    },
    {
      name: 'Mussoorie',
      imageSrc: 'assets/mussoorie.jpg',
      description: 'Mussoorie, the queen of hill stations, is famous for its scenic beauty.',
      routeLink: 'mussoorie'
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