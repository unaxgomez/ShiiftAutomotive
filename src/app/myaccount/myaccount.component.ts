import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  user:User = {
    name : "",
    surname: "",
    email: "",
    password: "",
  }
  userId: number = -1;

  
  
  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    if(localStorage.getItem("User")){
      this.userId = JSON.parse(JSON.stringify(localStorage.getItem("User")))
      this.userService.getUser(this.userId).subscribe(data=>{
        this.user = data;
        console.log(this.user);
      })
    }
  }
 
  putUser(): void{
    this.userService.putUser(this.user).subscribe(data =>{
      console.log(data);
      
    });
  }

  deleteUser(id: number): void{
    this.userService.deleteUser(id).subscribe(data =>{
      console.log(data);
  });
}

}
