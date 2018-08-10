import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { IProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: IProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute, public _productoServicio: ProductosService ) { }

  ngOnInit() {
   this.route.params.subscribe( parametros => {
       // console.log(parametros);
       this._productoServicio.getProducto(parametros['id'])
           .subscribe( (producto: IProductoDescripcion) => { 
              this.producto = producto;
              this.id = parametros['id'];
           });
    });
  }

}
