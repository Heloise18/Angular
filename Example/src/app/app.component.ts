import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bananinha';
  count = 0;
  palavra: String = " "
 
  digitado = (valor:string) =>{
    this.palavra = valor
  }
  
  foiClicado = () => {
    this.count++;
  }
}
