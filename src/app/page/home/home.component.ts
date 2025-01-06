import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lenguaje } from '../../interfaces/lenguaje.interface';
import { CommonModule, isPlatformBrowser} from '@angular/common';
import { Proyecto } from '../../interfaces/proyecto.interface';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  listLenguajes?: Lenguaje[]
  
  listProyectos?: Proyecto[]

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    this.listLenguajes = [
      { nombre:'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
      { nombre: 'Java', imagen: 'https://i.postimg.cc/85RDTw59/java.png', descripcion: 'Lenguaje robusto y orientado a objetos' },
      { nombre: 'Springboot', imagen: 'https://i.postimg.cc/bwZhZqrQ/spring.png', descripcion: 'Framework de Java para microservicios' },
      { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
      { nombre: 'React', imagen: 'https://i.postimg.cc/Y9HKDg33/react.png', descripcion: 'Librería de JavaScript para construir interfaces de usuario' },
      { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }
    ];

    this.listProyectos = [
      {titulo: 'bookstore v1', descripcion:"Esta es la descripcion de la bookstore", listLenguajes: [
        { nombre:'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
        { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
        { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }],
      portada:'https://th.bing.com/th/id/OIP.o92q1xkGZqhHykgzPUEJggHaEo?rs=1&pid=ImgDetMain'
      },
      {titulo: 'bookstore v1', descripcion:"Esta es la descripcion de la bookstore", listLenguajes: [
        { nombre:'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
        { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
        { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }],
      portada:'https://th.bing.com/th/id/OIP.o92q1xkGZqhHykgzPUEJggHaEo?rs=1&pid=ImgDetMain'
      },
      {titulo: 'bookstore v1', descripcion:"Esta es la descripcion de la bookstore", listLenguajes: [
        { nombre:'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
        { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
        { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }],
      portada:'https://th.bing.com/th/id/OIP.o92q1xkGZqhHykgzPUEJggHaEo?rs=1&pid=ImgDetMain'
      }
    ]


  }

  ngOnInit() {
    // Verifica si el entorno es el navegador antes de inicializar AOS
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }


}
