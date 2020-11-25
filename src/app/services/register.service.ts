import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {performWatchCompilation} from '@angular/compiler-cli/src/perform_watch';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseProductUrl = 'https://544d26b03005.eu.ngrok.io';
  //private baseProductUrl = 'https://localhost:8081';



  constructor(private httpClient: HttpClient) { }

  registerUser(username: string, mdp: string){
    //console.log(username+" "+mdp);
    const auth_json = {
      email:username,
      password: mdp
    }
    console.log(auth_json)
    return this.httpClient.post(this.baseProductUrl+"/auth/login",auth_json,{withCredentials:true});
  }

  logoutUser(){
    return this.httpClient.get(this.baseProductUrl+"/auth/logout",{withCredentials:true})
  }

}



