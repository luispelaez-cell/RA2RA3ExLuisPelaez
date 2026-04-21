import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-componente',
  imports: [],
  templateUrl: './componente.html',
  styleUrl: './componente.css',
})
export class Componente {

  constructor(private http: HttpClient) {}
  putVerge(ALUMN_VIRGEN: number){
    return this.http.put('http://localhost:3000/verge/pelaez', {ALUMN_VIRGEN: ALUMN_VIRGEN
    });
  }
}

