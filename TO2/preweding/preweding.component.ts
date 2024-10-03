import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preweding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preweding.component.html',
  styleUrls: ['./preweding.component.css'] // Corrected property name
})
export class PrewedingComponent {
  constructor(private router: Router) {}
  places = [
    {
      name: 'Jodhpur',
      imageSrc: 'assets/img1/Jodhpur.jpg',
      description: 'pre wedding shoot locations in India',
      routeLink: 'mumbai'
    },
    {
      name: 'Hyderabad',
      imageSrc: 'assets/shimala.jpg',
      description: 'the best hotels in India for a pre wedding photo shoot',
      routeLink: 'delhi'
    },
    {
      name: 'Udaipur',
      imageSrc: 'assets/Udaipur.jpg',
      description: 'One of the best places for pre wedding shoot in India',
      routeLink: 'chennai'
    },
    {
      name: 'Goa',
      imageSrc: 'assets/Goa.jpg',
      description: 'the best destinations for a beach pre wedding shoot in India.',
      routeLink: 'moriri'
    },
    {
      name: 'Agra',
      imageSrc: 'assets/Agra.jpg',
      description: 'the most famous symbol of love – the Taj Mahal.',
      routeLink: 'rishikesh'
    },
    {
      name: 'Alwar',
      imageSrc: 'assets/Alwar.jpg',
      description: 'the age old magic of romance ever so beautifully onto the camera.',
      routeLink: 'chandratal'
    },
    {
      name: 'Rishikesh',
      imageSrc: 'assets/Rishikesh.jpg',
      description: 'For those couples that are seeking for roads.',
      routeLink: 'gangtok'
    },
    {
      name: 'Pondicherry',
      imageSrc: 'assets/Alleppey.jpg',
      description: 'The colorful streets, scenic views, and liveliness in the atmosphere',
      routeLink: 'coorg'
    },
    {
      name: 'Jammu And Kashmir',
      imageSrc: 'assets/Jammu.jpg',
      description: ' Lavasa is a destination that reeks',
      routeLink: 'mussoorie'
    },
    {
      name: 'Maharashtra',
      imageSrc: 'assets/Maharashtra.jpg',
      description: 'Shillong is famous for its green fields.',
      routeLink: 'shillong'
    },
    // Add other places similarly
  ];

  redirectToNextPage(routeLink: string) {
    this.router.navigate([routeLink]);
  }
}
