import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  title = 'My Recipe Book';
  loadedFeature = 'recipe';
  constructor( private authService :AuthService){}

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit(){
    this.authService.autoLogin();
  }
}
