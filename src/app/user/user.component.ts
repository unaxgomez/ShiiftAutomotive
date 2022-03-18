import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  us: User = {
    name: "",
    surname: "",
    email: "",
    password: ""
  }
  
  
  

  constructor(public userService: UserServiceService ) { }

  ngOnInit(): void {
  }

  postUser(): void {
    this.userService.postUser(this.us).subscribe();
  }

}
