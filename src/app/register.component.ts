import {Component} from '@angular/core';
import {AF} from "./providers/af.provider";
import {Router} from "@angular/router";
@Component({
    selector:'register',
    templateUrl:'./register.component.html'
})
export class RegisterComponent{
    public error:any;
    constructor(private afService:AF,private router:Router)
    {}
    register(event, name, email,password)
    {
        event.preventDefault();
        this.afService.registerUser(email,password).then((user)=>{
            this.afService.saveUserInfoFromForm(user.uid,name,email).then(()=>{
            this.router.navigate(['']);
        }).catch((error)=>{
            this.error = error;
        });
        }).catch((error)=>{
            this.error = error;
        });
    }
}