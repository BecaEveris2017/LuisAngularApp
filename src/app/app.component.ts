import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Luis';
  nombre2 = 'Ganaste un Ipad, clic aqui para reclamar.';
  
  num1 = 324234;
  num2 = 234;
  num0 = this.num1+this.num2;
  colores=['negro','rojo','verde'];
  
}
