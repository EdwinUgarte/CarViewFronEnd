import { Component } from '@angular/core';
import { AutoService } from 'src/app/app/services/auto.service';
import {Auto} from 'src/app/components/perfil/auto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

    carros :  Auto[] = [];
    foto: string = "";
    constructor(private autoService : AutoService) { }
    
    ngOnInit(): void {
      this.autoService.getAutos().subscribe((respuesta) => {
        this.carros = respuesta;
       })

    }
    
    
}
