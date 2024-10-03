import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registration } from './registration';
import { error } from 'console';

@Component({
  selector: 'app-registation',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './registation.component.html',
  styleUrl: './registation.component.css'
})
export class RegistationComponent {
  rest_url:string="http://localhost:5350";
  // resList:registation[]=[];
 
  constructor(private http:HttpClient){
  }
myform:any=new FormGroup(
  {
    name:new FormControl('',Validators.required),
    birthdate:new FormControl('',Validators.required),

    email:new FormControl('',Validators.required),

    phone_number:new FormControl('',Validators.required),

    address:new FormControl('',Validators.required),
    alternate_number:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)


  }
)

  postUser(){
    let newUser:any=this.myform.value
    this.http.post<Registration>(this.rest_url+'/addUser',newUser).subscribe(
      (data)=>{
        
        alert("Successfully Registered. Kindly Login");

      },
      (error)=>{
        alert("Please fill all the information");
      }

    )
      

    }
    

  }

  
  

  

