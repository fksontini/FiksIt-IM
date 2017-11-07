import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {AF} from "../app/providers/af";
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule, Routes} from "@angular/router";
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCtcEHtx7E_kYlPUs1dIxZl2mAOKDhtzFI",
  authDomain: "fir-crud-d1a25.firebaseapp.com",
  databaseURL: "https://fir-crud-d1a25.firebaseio.com",
  projectId: "fir-crud-d1a25",
  storageBucket: "fir-crud-d1a25.appspot.com",
  messagingSenderId: "45658873033"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
