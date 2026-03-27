import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComida } from 'src/app/features/main-page/comida-page/Comida.mock';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})


export class ModalComponent {
  
  @Input()
  Title?: string;

  clicked = () =>{

  }


}
