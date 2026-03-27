import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked: boolean = false;
  
  @Output()
  OnClick: EventEmitter<void> = new EventEmitter();
  
  @Input()
  label: string = " ";
  
  clicked = () => {
    this.OnClick.emit();
    this.isClicked = !this.isClicked;
  }


}
