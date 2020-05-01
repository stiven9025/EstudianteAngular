import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { utils } from 'protractor';


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
//variables
estado=''

//---------------------------------


estudiantes: Estudiante[]=[
{id:1,nombre:'Edison Andres',apellido:'Gonzales Lopez',nota:4.5},
{id:2,nombre:'Edison Stiven',apellido:'Suarez Perez',nota:4},
{id:3,nombre:'Juan Felipe',apellido:'Suarez Rea',nota:0.0},
{id:4,nombre:'Carlos Andres',apellido:'Suarez Feas',nota:3.0},
{id:5,nombre:'Enrique Gomez',apellido:'Garcia Pineda',nota:4.5},
{id:6,nombre:'Estiven ',apellido:'Muñoz Perez',nota:4.5},
{id:7,nombre:'Maria Cristina',apellido:'Pelaez Mesa',nota:2.9},
{id:8,nombre:'Lina Rios',apellido:'Rodriguez Peres',nota:4.5},
{id:9,nombre:'Ana Maria',apellido:'Castro Perez',nota:0.0},
{id:10,nombre:'Yuliana Andrea',apellido:'Villegaz Perez',nota:4.5},
];


prueba(nota:number){
  if(nota<3.0){
  this.estado='REPROBADO'
  }
  else{
    this.estado='APROBADO'
  }
  return this.estado;
}

obtenerFecha(){
var fecha=new Date;
var day = fecha.getDate();
var month = fecha.getMonth();
var year = fecha.getFullYear();
var minutes = fecha.getMinutes();
var hours = fecha.getHours();
var seconds = fecha.getSeconds();
var myFecha = day+"-"+(month+1)+"-"+year+" "+ hours+":"+minutes+":"+seconds;
return myFecha
}

ngOnInit(): void {

  }


}
