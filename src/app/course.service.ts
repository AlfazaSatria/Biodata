import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  CourseService(): any[]{
    throw new Error("Method not implemented");
  }

  constructor() { }

  getAlfaza(){
    return[
      {id:0, hobby:"Membaca", ket:"Setiap hari"},
      {id:1, hobby:"Game", ket:"Setiap hari"},
      {id:2, hobby:"Futsal", ket:"Dua Minggu Sekali"}      
    ]
  }
}
