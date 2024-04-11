import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from './angular01/angular01.component';
import { RegisterComponent } from './register/register.component';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ts01Component, Angular01Component, RegisterComponent, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos01';
}
