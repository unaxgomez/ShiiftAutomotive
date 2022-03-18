import { Component } from '@angular/core';
import { Illustration } from './illustration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShiiftAutomotive';
  

  objetos: Illustration[] = [];

il?: Illustration;


}



