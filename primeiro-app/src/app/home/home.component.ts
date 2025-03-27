import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // boolean = false ;

  // atualizaBoolean(valor : boolean){
  //   this.boolean = valor ;
  // }
  private enviaformularioService = inject(EnviaformularioService)
  name = "silvio" ;
  id = 92;
  devemostrartitulo = false;
  listItens = ["item1" ,"item2", "item3" ]

  submit(){
    this.enviaformularioService.enviainfoprobackend("enviando info pro back")
  }
}
