import { Component } from '@angular/core';
import { INFORMATIONS } from '../../mocks/mock-information';

interface Information {
  icono: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  information = INFORMATIONS;

  constructor() { }

}
