import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Illustration } from '../illustration';
import { IllustrationService } from '../illustration-service.service';

@Component({
  selector: 'app-illustration-detail',
  templateUrl: './illustration-detail.component.html',
  styleUrls: ['./illustration-detail.component.css']
})
export class IllustrationDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: IllustrationService) { }

  id: number=0;
  illustration?: Illustration;
  illustrations?: Illustration[];

  ngOnInit(): void {
    console.log(this.route);
    
    this.route.params.subscribe(params => {
      
      this.id = params['id']
      console.log(this.id);
      
      this.service.getIllustrationDetail(this.id).subscribe(data =>{
        this.illustration = data;
        console.log(this.illustration);
      })
    })
  }

  getIllustrationDetail(): void{
    this.service.getIllustrationDetail(this.id).subscribe(data =>{
      this.illustration = data;
      console.log(this.illustration);
  })
  }

  myCart(): void{
    if(localStorage.getItem("carrito")){
      this.illustrations = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("carrito"))))
      if(this.illustration != null){
        this.illustrations?.push(this.illustration)
      }
      localStorage.setItem("carrito", JSON.stringify(this.illustrations))
    } else {
      localStorage.setItem("carrito", JSON.stringify([this.illustration]))
    }
  }

}
