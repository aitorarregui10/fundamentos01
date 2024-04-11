import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  descripcion:string="";
  codigo:string="";
  precioCosto:number=0;
  precioVenta:number=0;
  stockIdeal:number=0;


  ingresar():void{

    let mensajeOk:string="Producto dado de alta";
    let mensajeInval:string="Error, faltan datos en el producto que intentas añadir";

    if (this.precioCosto && this.precioVenta && this.stockIdeal > 0) {
      console.log(mensajeOk);
    } else {
      console.log(mensajeInval);
    }
  }
  nada():void{}
}
