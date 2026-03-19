import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output()
  escrita = new EventEmitter<string>()
  
  typed = (valor : any) =>{
    console.log(valor.target.value)
    this.escrita.emit(valor);
  
  }

}
