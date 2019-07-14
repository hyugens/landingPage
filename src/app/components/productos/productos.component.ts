import { Component, OnInit } from '@angular/core';

interface Producto {
  titulo: string;
  subtitulo: string;
  imagen: string;
  texto: string;
  lista?: string[];
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [
    {
      titulo: 'Desarrollo Web',
      subtitulo: 'Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos',
      imagen: 'assets/images/desarrollo web.jpg',
      texto: `En este curso aprenderás lo básico de cada tecnología y 
      después integraremos todo junto para hacer diseños increíbles, 
      es decir: crearemos una base sólida y luego veremos como utilizarla 
      sin duda la que considero la mejor forma de aprender.`
    },
    
    {
      titulo: 'Lenguajes de programación',
      subtitulo: 'Aprende las Bases de la Programación en 9 lenguajes a la vez: Java, Python, Go, C++, PHP, Ruby, C#, JavaScript y C',
      imagen: 'assets/images/ordenador.jpg',
      texto: `En este curso de Fundamentos de Programación aprenderás de forma básica
      y muy completa las nociones más elementales sobre el desarrollo de software. 
      Este curso dará un recorrido completo por todos los conceptos más básicos 
      para aprender a programar, lo cual te permitirá entender cualquier lenguaje 
      gracias a la visión global que adquirirás.`
    },
    {
      titulo: 'Aplicaciones móviles',
      subtitulo: 'Aprender a programar aplicaciones y juegos para Android de forma profesional y desde cero.',
      imagen: 'assets/images/aplicaciones moviles.jpg',
      texto: `Aprende a crear aplicaciones para android desde cero y de forma sencilla con Android Studio y 
      las herramientas más profesionales del momento. En este curso aprenderás:`,
      lista: [
        'Java necesario para el desarrollo en Android',
        'Desarrollo de Aplicaciones nativas para Android',
        'Desarrollo de Juegos para Android',
        'y mucho más'
      ]

    },
    {
      titulo: 'Desarrollo de videojuegos',
      subtitulo: 'Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos',
      imagen: 'assets/images/videojuegos.jpg',
      texto: `En este curso aprenderás lo básico de cada tecnología y 
      después integraremos todo junto para hacer diseños increíbles, 
      es decir: crearemos una base sólida y luego veremos como utilizarla 
      sin duda la que considero la mejor forma de aprender.`
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
