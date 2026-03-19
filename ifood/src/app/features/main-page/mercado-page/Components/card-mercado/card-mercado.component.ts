import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMercado } from '../../Mercado.mock';

@Component({
  selector: 'card-mercado',
  templateUrl: './card-mercado.component.html',
  styleUrls: ['./card-mercado.component.css']
})
export class CardMercadoComponent {
  
  @Input()
  value!: IMercado 




}
