import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BuscarLibroModel } from '../models/libro.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url = environment.endpoint;

  constructor(private http: HttpClient) { }



buscarlibro(palabraClave: string){

  console.log(palabraClave);
  
  return this.http.post(`https://localhost:5002/api/Libro/BuscarLibros/`+palabraClave, httpOptions);

 
}

 
}



