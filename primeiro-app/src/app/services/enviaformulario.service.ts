import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaformularioService {

  constructor() { }

  enviainfoprobackend(info:string){
    console.log("enviado pro backend")
  }
}
