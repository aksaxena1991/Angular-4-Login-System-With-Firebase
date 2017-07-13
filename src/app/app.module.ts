import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AF} from './providers/af.provider';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import {AngularFireModule} from 'angularfire2';
import {RouterModule, Routes} from "@angular/router";


export const config = {
    apiKey: "AIzaSyBxw_nePJG2-KEDLry9O7y8kV8f4-lXAiU",
    authDomain: "fir-poc-4b6d5.firebaseapp.com",
    databaseURL: "https://fir-poc-4b6d5.firebaseio.com",
    projectId: "fir-poc-4b6d5",
    storageBucket: "fir-poc-4b6d5.appspot.com",
    messagingSenderId: "274849801182"
  };
   const routes:Routes = [
     {path:'login',component:LoginComponent},
     {path:'',component:HomeComponent},
     {path:'register',component:RegisterComponent}
   ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpModule,
    // NgbModule,
    // ,NgbButtonsModule,NgbDatepicker,NgbModal,NgbPopover,NgbTooltip,NgbTypeahead,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
