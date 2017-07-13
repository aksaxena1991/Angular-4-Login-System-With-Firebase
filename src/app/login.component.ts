import {Component} from '@angular/core';
import { AF} from './providers/af.provider';
import {Router} from '@angular/router';
@Component({
    selector:'login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    constructor(public afService:AF, private router:Router)
    {
        
    }
    loginWithGoogle()
    {
        this.afService.loginWithGoogle().then((data)=>{
            this.afService.addUserInfo(data);
             this.router.navigate(['']);
         }); 
    }
    loginWithEmail(event,email,password)
        {
            event.preventDefault();
            this.afService.loginWithEmail(email,password).then(()=>{
this.router.navigate(['']);
            }).catch((error:any)=>{
                if(error)
                {
                    // this.error = error;
                }

            });
           
        }
}