import { Component, OnInit } from '@angular/core';
import { Illustration } from '../illustration';
import { IllustrationService } from '../illustration-service.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.css']
})
export class IllustrationComponent implements OnInit {

  constructor(public service: IllustrationService) { }

  illustration?: Illustration[];

  il?: Illustration;

  ngOnInit(): void {
    this.service.getIllustration().subscribe(data =>{
      this.illustration = data;
      console.log(this.illustration);
    })
  }

  getIllustration(): void {
  }

}
