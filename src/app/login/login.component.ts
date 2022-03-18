import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lo: User = {
    email: "",
    password: "",
    name: '',
    surname: ''
  }
  notLogged: boolean = false

  logged: number = -1;

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
  }

  checkUser(): void {
    this.notLogged = false;
    this.userService.checkUser(this.lo.email, this.lo.password).subscribe(data =>{
      this.logged = data;
      if(this.logged != -1){
        localStorage.setItem("User", this.logged.toString())
        location.href = "/";
      }else{
        this.notLogged = true;
      }
    })
  }

  

}
