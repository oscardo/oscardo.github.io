import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iproductos } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: iproductos[] = [];

  constructor( private Http: HttpClient ) { 
    this.CargarProductos();
  }

  private CargarProductos(){
    this.Http.get('https://angular-html-b9222.firebaseio.com/productos_idx.json')
        .subscribe( (prod: iproductos[]) => {
          // console.log(prod);
          this.producto = prod;
          setTimeout(() => {
            this.cargando = false;
          }, 2000);

        });
  }
}
