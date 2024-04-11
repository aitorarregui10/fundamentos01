import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string="";
  password:string="";
  repeat:string="";


  comprobar():void{

    let mensajeOk:string="Bienvenido/a a nuestra aplicacion";
    let mensajeInval:string="Usuario o contraseña inválidos";

    if (this.password===this.repeat){
      alert(mensajeOk);
    } else {
      alert(mensajeInval);
    }
  }
}
