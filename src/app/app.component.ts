import { Component } from '@angular/core';
import {AF} from './providers/af.provider';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Login System With Firebase';
  public authorized:any;
  public isLoggedIn : boolean;
  constructor(public afService:AF,private router:Router)
  {
    
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null)
        {
          console.log("Not Logged In");
          this.isLoggedIn = false;
        }
        else{
          console.log("Successfully Logged In");
          this.authorized = auth.auth ;
          
          this.isLoggedIn = true;
        }
      }
    );
  }
  logout()
  {
    this.afService.logout();
    this.router.navigate(['login']);

  }
}
