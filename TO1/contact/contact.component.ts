// contact.component.ts

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { contact } from './contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  rest_url: string = "http://localhost:5350";
  contactlist: contact[] = [];
  status: boolean = false;

  constructor(private http: HttpClient) {}

  formData: contact = {
    id: 0,
    your_name: '',
    email_address: '',
    phone_number: 0,
    how_can_we_help: ''
  };

  submitForm() {
    // You can handle the form submission logic here
    console.log('Form Submitted:', this.formData);
  }

  getAll() {
    this.http.get<contact[]>(this.rest_url + "/getAllContacts").subscribe(
      data => {
        this.status = true;
        console.log("Data received:", data);
        this.contactlist = data;
      },
      err => {
        console.log("Error fetching contacts:", err);
      }
    );
  }

  contactUser(myform: NgForm) {
    console.log("GOT DATA =", myform.value);

    this.http.post<contact[]>(this.rest_url + "/addContact", myform.value).subscribe(
      data => {
        alert("Post completed!!!");
        console.log("Post completed", data);
      },
      err => {
        alert("Post failed!!!");
        console.log("Post failed", err);
      }
    );
  }
}
