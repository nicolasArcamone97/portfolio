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
      {
        titulo: 'bookstore v1',
        descripcion: "Una tienda de libros en línea que permite explorar, agregar libros al carrito, crear una lista de favoritos y realizar compras. Incluye funcionalidades de registro e inicio de sesión, garantizando una experiencia personalizada para los usuarios.",
        listLenguajes: [
          { nombre: 'Nest Js', imagen: 'https://i.postimg.cc/LXwfM9JN/nestjs.png', descripcion: 'Lenguaje que lo usan solo los cracks' },
          { nombre: 'Angular', imagen: 'https://i.postimg.cc/G2x0W2g1/angular-1.png', descripcion: 'Framework de desarrollo web basado en TypeScript' },
          { nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' }
        ],
        portada: 'https://i.postimg.cc/ryxbWJkG/Captura-de-pantalla-2025-01-20-233119.png',
        integrantes: 1,
        listConceptos: [
          'CRUD completo',
          'Autenticación con JWT',
          'Uso de APIs REST',
          'ORM',
          'Arquitectura MVC',
          'Manejo de errores'
        ],
        url:'https://bookstore-v1-demo.netlify.app/'
      },
      {
        titulo: "Dashboard de Monitoreo",
        descripcion: "Un sistema de monitoreo responsive desarrollado en 7 días como parte de un challenge laboral. Incluye funcionalidades como autenticación con JWT, CRUD de plantas, y consumo de APIs externas para información sobre países. Además, sigue un diseño establecido en Figma, asegurando una interfaz intuitiva y profesional.",
        listLenguajes: [
          {
            nombre: "Spring Boot",
            imagen: 'https://i.postimg.cc/bwZhZqrQ/spring.png',
            descripcion: "Framework para desarrollo de aplicaciones backend en Java, ideal para servicios robustos y escalables."
          },
          {
            nombre: "Angular",
            imagen: "https://i.postimg.cc/G2x0W2g1/angular-1.png",
            descripcion: "Framework de desarrollo frontend basado en TypeScript, usado para construir interfaces web interactivas."
          },
          {
            nombre: 'MySQL', imagen: 'https://i.postimg.cc/W4rc7SMz/mysql.png', descripcion: 'Sistema de gestión de bases de datos relacional de código abierto' 
          }
        ],
        portada: "https://i.postimg.cc/4xNFDRhw/Captura-de-pantalla-2025-01-20-232946.png",
        integrantes: 1,
        listConceptos: [
          "CRUD completo de plantas",
          "Autenticación con JWT",
          "Responsive Design",
          "Consumo de APIs de terceros",
          "Implementación de diseño basado en Figma",
          "Arquitectura modular con separación de responsabilidades"
        ],
        url: 'https://dashboard-monitoreo-demo.netlify.app'
      },
      {
        titulo: "Gestor de tareas",
        descripcion: "Un gestor de tareas que permite a los usuarios crear, editar, eliminar y organizar sus tareas de forma eficiente. Incluye autenticación segura con JWT, integración con Google para iniciar sesión, y un diseño responsive optimizado para dispositivos móviles y escritorio.",
        listLenguajes: [
          {
            nombre: "Nest Js",
            imagen: "https://i.postimg.cc/LXwfM9JN/nestjs.png",
            descripcion: "Framework backend para construir aplicaciones robustas y escalables."
          },
          {
            nombre: "Angular",
            imagen: "https://i.postimg.cc/G2x0W2g1/angular-1.png",
            descripcion: "Framework de desarrollo frontend basado en TypeScript, ideal para crear interfaces de usuario interactivas."
          },
          {
            nombre: "MySQL",
            imagen: "https://i.postimg.cc/W4rc7SMz/mysql.png",
            descripcion: "Sistema de gestión de bases de datos relacional, utilizado para manejar la persistencia de tareas y usuarios."
          }
        ],
        portada: "https://th.bing.com/th/id/OIP.wUeIzCVp6ByE5-JaQRmB8AHaEK?pid=ImgDet&rs=1",
        integrantes: 1,
        listConceptos: [
          "CRUD completo de tareas",
          "Autenticación JWT",
          "Google (OAuth)",
          "MVC",
          "Manejo de errores en el backend"
        ],
        url:'https://github.com/nicolasArcamone97/nestJs-gestorTareas'
      },
      {
        titulo: "Cinemarket v1",
        descripcion: "Proyecto de una materia de la universidad su desarrollado fue con React JS que permite a los usuarios explorar y buscar películas a través de una API de terceros. La aplicación proporciona detalles de las películas, incluyendo sinopsis, calificaciones y géneros. Es completamente frontend y cuenta con un diseño atractivo y responsive.",
        listLenguajes: [
          {
            nombre: "React JS",
            imagen: 'https://i.postimg.cc/Y9HKDg33/react.png',
            descripcion: "Biblioteca de JavaScript para construir interfaces de usuario interactivas."
          },
          
        ],
        portada: "https://i.postimg.cc/Bb0mNr0T/Captura-de-pantalla-2025-01-20-233222.png",
        integrantes: 1,
        listConceptos: [
          "Consumo de API externa de películas",
          "Diseño responsive",
        ],
        url: 'https://cinemarket-v2.netlify.app'
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
