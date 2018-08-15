import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina;
cargada = false;
equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    // console.log('Mensaje de infopagina');
    // leer archivos json
    this.CargarInfo();
    this.CargarEquipo();
  }

  private CargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      console.log(resp);
      console.log(resp['email']);
    });
  }

  private CargarEquipo(){
    this.http.get('https://angular-html-b9222.firebaseio.com/equipo.json')
    .subscribe( (respuesta: any[]) => {
      this.equipo = respuesta;
      // console.log(respuesta);
    });
  }

}
