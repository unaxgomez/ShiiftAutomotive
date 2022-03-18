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

}
