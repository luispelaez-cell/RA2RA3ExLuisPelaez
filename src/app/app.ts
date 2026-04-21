import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Componente} from './components/componente/componente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RA2RA3ExLuisPelaez');
}
