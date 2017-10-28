import { Component } from '@angular/core';

@Component({
  selector: 'listaColores',
  template: `
    
  
  <input #newcolores

      (keyup.enter)="addcolores(newcolores.value)"

      (blur)="addcolores(newcolores.value); newcolores.value='' ">
      
      <ul><li  *ngFor="let colores of colores" [hidden]="!condicion">{{colores}}</li></ul>

    <button (click)="addcolores(newcolores.value)">Agregar</button>
    <button (click)="mostrarColores(condicion)">Mostrar/Ocultar</button>

    `
})
export class LittleTourComponent {
  colores = ['Rojo', 'Verde', 'Negro'];
  condicion = true;

  mostrarColores (){
this.condicion=!this.condicion;
  }

  addcolores(newcolores: string) {
    if (newcolores) {
      this.colores.push(newcolores);
    }
  }
}

