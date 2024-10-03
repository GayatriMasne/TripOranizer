import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Correct import statement for RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roadtrip',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './roadtrip.component.html',
  styleUrl: './roadtrip.component.css'
})
export class RoadtripComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Mumbai to Goa',
      imageSrc: 'assets/MumbaiToGoa.jpeg',
      description: 'The road is simple, smooth, and straight with a four-lane road ',
      routeLink: 'mumbai'
    },
    {
      name: 'Delhi to Jaipur',
      imageSrc: 'assets/MumbaiToGoa.jpeg',
      description: 'The distance by road is approximately between 280 to 320 KM',
      routeLink: 'delhi'
    },
    {
      name: 'Chennai to Munnar',
      imageSrc: 'assets/Jaisalmercamp.jpg',
      description: 'The Neryamangalam-Munnar route from Ernakulam .',
      routeLink: 'chennai'
    },
    {
      name: 'Jammu & Kashmir',
      imageSrc: 'assets/tsomoriricamp.jpg',
      description: 'Jammu and Kashmir is also famous for its scenic beauty',
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