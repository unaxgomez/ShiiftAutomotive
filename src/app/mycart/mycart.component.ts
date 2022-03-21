import { Component, OnInit } from '@angular/core';
import { Illustration } from '../illustration';
import { IllustrationService } from '../illustration-service.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  constructor(public service: IllustrationService) { }

  illustrations?: Illustration[];

  ngOnInit(): void {
    // this.service.getIllustration().subscribe(data =>{
    //   this.illustration = data;
    //   console.log(this.illustration);
    // })
    if(localStorage.getItem("carrito")){
      this.illustrations = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("carrito"))))
    }
  }

  emptyCart(): void{
    if(localStorage.getItem("carrito")){
      localStorage.removeItem("carrito");
      this.illustrations = undefined;
    }
  }

}
