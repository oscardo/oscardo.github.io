import { Injectable } from '@angular/core';
import { icontacto } from '../interfaces/contacto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  contacto_info: icontacto;

  constructor( private http: HttpClient ) {
    this.CargarInfo();
   }

   private CargarInfo() {
    this.http.get('https://angular-html-b9222.firebaseio.com/contacto.json')
             .subscribe( (cont: icontacto) => {
              this.contacto_info = cont;
          });
   }
}
