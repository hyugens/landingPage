import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  mostrar = true;
  dataSend: any;

  profileForm = new FormGroup({
    nombre: new FormControl('', [
      Validators.required
    ]),
    apellido: new FormControl(''),
    correo: new FormControl('', [
      Validators.required
    ]),
    pais: new FormControl('', [
      Validators.required
    ]),
    edad: new FormControl('', [
      Validators.required
    ]),
    curso_interes: new FormControl('', [
      Validators.required
    ])

  });
  constructor() { }

  datos() {
    const data = this.profileForm;
    if (data.status === 'VALID') {
      this.dataSend = data.value;
      data.reset();
      console.log(this.dataSend);
      return $('#exampleModalScrollable').modal('hide');
    }
  }
}
