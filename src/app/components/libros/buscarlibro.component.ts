import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { BuscarLibroModel, LibroModel } from '../../models/libro.model';
import { LibrosService } from '../../services/libros.service';




@Component({
  selector: 'app-buscar-libros',
  templateUrl: './buscarlibro.component.html',
  
})
export class BuscarLibrosComponent implements OnInit {


  buscarLibro: BuscarLibroModel = new BuscarLibroModel();
  formLibro: FormGroup;
  listlibro: LibroModel [] = [];
  isRegistro: boolean = false;

  constructor(private fb: FormBuilder, private librosService: LibrosService) {


   }

   ngOnInit() {
    this.formLibro = this.fb.group({
      palabraClave: new FormControl()


    });
}

public buscarlibros() {
  
  this.buscarLibro = JSON.parse(JSON.stringify(this.formLibro.value));
  console.log(this.buscarLibro);
   this.librosService.buscarlibro(this.buscarLibro.palabraClave).subscribe(
     (Respuesta: any) => {
      console.log(this.buscarLibro);
      this.listlibro = Respuesta.libros;

      if(this.listlibro.length > 0)
        this.isRegistro = true;
      else
        this.isRegistro = false;
       
   },
  );
}


}