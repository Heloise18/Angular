import { Component } from '@angular/core';
import MockComida, { IComida } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})

export class ComidaPageComponent {
  
  protected Foods: IComida[] = []
  constructor (){
    this.Foods = MockComida;
  }

}
