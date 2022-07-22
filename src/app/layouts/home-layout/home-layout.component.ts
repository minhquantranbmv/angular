import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: any = null;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logginUser.subscribe(user => {
      if(user.email != undefined && user.googleId != undefined){
        this.isLoggedIn = true;
        this.loggedInUser = user;
      }
    })
  }

}
