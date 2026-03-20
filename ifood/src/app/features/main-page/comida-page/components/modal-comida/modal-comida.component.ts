import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from '../../Comida.mock';

@Component({
  selector: 'modal-comida',
  templateUrl: './modal-comida.component.html',
  styleUrls: ['./modal-comida.component.css']
})
export class ModalComidaComponent {
  
  @Input()
  value!: IComida

  @Output()
  Click: EventEmitter<void> = new EventEmitter()

  clicked = () =>{
    this.Click.emit()
  }


}
