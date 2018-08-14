import { Component, OnInit } from '@angular/core';
import { icontacto } from '../../interfaces/contacto.interface';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto_servicio: icontacto[] = [];
  constructor( public _servicioContacto: ContactoService ) { }

  ngOnInit() {
  }

}
