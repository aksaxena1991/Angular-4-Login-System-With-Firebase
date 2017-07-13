import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseObjectFactoryOpts} from "angularfire2/interfaces";

@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.database.object('/users/' + auth.uid);
        }
      });

    this.messages = this.af.database.list('/messages');
    this.users = this.af.database.list('/users');
  }

  
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }
  

  logout() {
    return this.af.auth.logout();
  }

  
  addUserInfo(data){
    //We saved their auth info now save the rest to the db.
    
    this.users.push({
      email: data.auth.email,
      displayName: data.auth.displayName
    });
  }

  
  sendMessage(text) {
      console.log(this.displayName);
    var message = {
      message: text,
      
      
      timestamp: Date.now()
    };
    this.messages.push(message);
  }

  
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });


  }

  
  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('/registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

  
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

}