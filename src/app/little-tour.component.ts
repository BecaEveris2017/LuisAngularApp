import { Component } from '@angular/core';

@Component({
  selector: 'little-tour',
  template: `
    <input #newcolores
      (keyup.enter)="addcolores(newcolores.value)"
      (blur)="addcolores(newcolores.value); newcolores.value='' ">
      
      <ul><li *ngFor="let colores of colores">{{colores}}</li></ul>
      <ul><li [hidden]="!condicion">{{colores}}</li></ul>
      

    <button (click)="addcolores(newcolores.value)">Agregar</button>
    <button (click)="addcolores(newcolores.value)">Mostrar/Ocultar</button>

    
  `
})
export class LittleTourComponent {
  colores = ['Rojo', 'Verde', 'Negro'];
  condicion = true;
  addcolores(newcolores: string) {
    if (newcolores) {
      this.colores.push(newcolores);
    }
  }
}

