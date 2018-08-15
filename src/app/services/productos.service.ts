      import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iproductos } from '../interfaces/productos.interface';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: iproductos[] = []; // interfase de productos
  productoFiltrado: iproductos[] = []; // interfase de producto filtrados

  constructor( private Http: HttpClient ) {
    this.CargarProductos();
  }

  private CargarProductos() {
     return new Promise( ( resolve, reject ) => {
      this.Http.get('https://angular-html-b9222.firebaseio.com/productos_idx.json')
             .subscribe( (prod: iproductos[]) => {
            // console.log(prod);
            this.productos = prod;
            this.cargando = false;
            return resolve();
          });
     });
  }

  public getProducto( id: string ) {
    return this.Http.get(`https://angular-html-b9222.firebaseio.com/productos/${id}.json`);
  }

  public buscarProducto ( termino: string ) {
    if ( this.productos.length === 0 ) {
      // espera la carga
      this.cargando = true;
    } else { 
      this.filtrarProductos( termino );
      this.cargando = false;
    }
  }

  filtrarProductos( termino: string ) {
    // console.log(termino);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLowerCase = prod.titulo.toLocaleLowerCase();
      const categoriaLowerCase = prod.categoria.toLocaleLowerCase();
      if ( categoriaLowerCase.indexOf( termino ) >= 0 || tituloLowerCase.indexOf( termino ) >= 0 ) {
        // npm i http-server
        this.productoFiltrado.push ( prod );
      }
    });
  }
}
