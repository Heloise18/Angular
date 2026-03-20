import { Component } from '@angular/core';
import MockComida, { IComida } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})

export class ComidaPageComponent {
  
  protected abrido = false;

  abrir = () =>{
    this.abrido = true;
    console.log("abriuuu")
  }

  fechar = () =>{
    this.abrido = false;
    console.log("fechouu")
  }

  protected Foods: IComida[] = []
  
  constructor (){
    this.Foods = MockComida;
  }

}
