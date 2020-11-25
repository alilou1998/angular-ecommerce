import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterService} from '../../services/register.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  connected:boolean ;

  constructor(private router: Router,
              private registerService:RegisterService,
              private cookieService:CookieService) { }

  ngOnInit(): void {
    this.connected = this.cookieService.get("logged_in")=="true";
  }

  userInput(input: string): void{
    console.log(`value= ${input}`);
  }
  pwdInput(input: string): void{
    console.log(`value= ${input}`);
  }
  register(username: string, mdp: string): void{
    // console.log(`username= ${username} mdp=${mdp}`);
    this.registerService.registerUser(username,mdp).subscribe(()=>console.log("Logged in"));
    setTimeout(()=>document.location.reload(),20000)
  }

  logout() {
    this.cookieService.deleteAll();
    this.registerService.logoutUser().subscribe(()=>console.log("loggedout"));
    setTimeout(()=>document.location.reload(),600)
  }
}
