import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EstudianteAngular';
  autor='EDISON STIVEN SUAREZ ALVAREZ'
  instituccion='UCO'
  Estudiante: any ={codigo:1,nombre:'Edison Stiven',apellido:'Suarez Alvarez',nota:4.5}
}
