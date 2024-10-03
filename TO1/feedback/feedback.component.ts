import { Component, OnInit } from '@angular/core';
import { feedback } from './feedback';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  rest_url: string = 'http://localhost:5350';
  feedbackList: feedback[] = [];
  status: boolean = false;
  formData: any = {}; // Add formData property and initialize it

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAll();
  }

  submitForm() {
    console.log('Form Submitted:', this.formData);
  }

  getAll() {
    this.http.get<feedback[]>(this.rest_url + '/getAllFeedback').subscribe(
      (data) => {
        this.status = true;
        console.log('Got data');
        this.feedbackList = data;
      },
      (err) => {
        console.log('Error getting feedback data');
      }
    );
  }

  feedbackUser(myform: NgForm) {
    let newuser: any = myform.value;

    this.http.post<feedback>(this.rest_url + '/addFeedback', newuser).subscribe(
      (data) => {
        alert('Post completed!!!');
        console.log('Post completed', data);
      },
      (err) => {
        alert('Post failed!!!');
        console.log('Post failed', err);
      }
    );
  }
}
