import { Component } from '@angular/core';
import { PRODUCTOS } from '../../mocks/mock-productos';

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
export class ProductosComponent {
  productos: Producto[] = PRODUCTOS;
  constructor() { }
}
