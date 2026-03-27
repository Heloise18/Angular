import { Component } from '@angular/core';
import MockComida, { IComida } from './Comida.mock';

@Component({
  selector: 'app-comida-page',
  templateUrl: './comida-page.component.html',
  styleUrls: ['./comida-page.component.css']
})

export class ComidaPageComponent {
  
  // protected abrido = false;
  
  // fechar = () =>{
    //   this.abrido = false;
    //   console.log("fechouu")
    // }
    
    protected Foods: IComida[] = []

    protected focusedFood?: IComida;
    
    abrir = (item: IComida) =>{
      this.focusedFood = item;
      console.log("abriuuu")
    }
    
  constructor (){
    this.Foods = MockComida;
  }

}
