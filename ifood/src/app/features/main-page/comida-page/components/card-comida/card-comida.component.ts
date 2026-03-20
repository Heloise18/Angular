import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../../Comida.mock';

@Component({
  selector: 'card-comida',
  templateUrl: './card-comida.component.html',
  styleUrls: ['./card-comida.component.css']
})
export class CardComidaComponent {
  
  @Input()
  value!: IComida 

  @Output()
  Click: EventEmitter<void> = new EventEmitter();

  open = () => {
    this.Click.emit();
  }

  



}
