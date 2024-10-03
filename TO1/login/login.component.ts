import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from './login';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  rest_url:string="http://localhost:5350";
  // resList:registation[]=[];
 
  constructor(private http:HttpClient,private router:Router){
  }
  myform:any=new FormGroup(
    {
  
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    
}
  )
  getUser(){
    let em:any=this.myform.controls['email'].value;
    let pass:any = this.myform.controls['password'].value;
  
    this.http.get<Login>(this.rest_url+'/getbyemailandpassword/'+em+'/'+pass).subscribe(
      (data)=>{
        if(data==null){
          alert("login Unsuccessfully....."+data);
  

        }
       else
       {
        alert("login successfully....."+data);

          this.router.navigateByUrl('/home');
          localStorage.setItem("userIdentity",em);
       }
      },
      (error)=>{
        alert("Login Unsuccessful"+error);
      }

    )
      

    }
    

  }
