import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged: boolean = false
  userId: number = -1
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("User")){
      this.logged = true
    }

  }

  logOut(): void {
    localStorage.clear();
    location.href = "/"
  }

}
