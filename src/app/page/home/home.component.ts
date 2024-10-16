import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lenguaje } from '../../interfaces/lenguaje.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  listLenguajes?: Lenguaje[]

  constructor(){
    this.listLenguajes = [
      { nombre:'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
      { nombre: 'Java', imagen: 'https://i.postimg.cc/85RDTw59/java.png', descripcion: 'Lenguaje robusto y orientado a objetos' },
      { nombre: 'Springboot', imagen: 'https://i.postimg.cc/bwZhZqrQ/spring.png', descripcion: 'Framework de Java para microservicios' },
      { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
      { nombre: 'React', imagen: 'https://i.postimg.cc/Y9HKDg33/react.png', descripcion: 'Librería de JavaScript para construir interfaces de usuario' },
      { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }
    ];
  }

  ngOnInit(): void {
      
  }


  


}
