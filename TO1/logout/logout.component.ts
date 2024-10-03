import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  constructor(private router:Router){}
ngOnInit(): void {
   localStorage.setItem("userIdentity","Guest");
   this.router.navigate(['/ghar']);
   alert("LogOut Successfull!!!")
 }
}
