import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from 'src/app/app/services/auto.service';
import { Auto } from 'src/app/components/perfil/auto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent {
  public auto: Auto = new Auto();
  public id: number;

  constructor(
    private autoService: AutoService,
    private activatedRouter: ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.cargarAuto();
  }

  cargarAuto() {
    this.autoService.getAutoById(this.id).subscribe((respuesta) => {
      this.auto = respuesta;
    });
  }

  guardarAuto() {
    Swal.fire({
      title: '¿Estas seguro de guardar los datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.autoService.saveAuto(this.auto).subscribe(() => {
          Swal.fire(`${this.auto.nombre} guardado con éxito!`, '', 'success');
          this.router.navigate(['/lista']);
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info');
      }
    });
  }

  updateAuto() {
    Swal.fire({
      title: '¿Estas seguro de guardar los datos?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.autoService.updateAuto(this.auto, this.id).subscribe(() => {
          Swal.fire(`${this.auto.nombre} actualizado con éxito!`, '', 'success');
          this.router.navigate(['/lista']);
        });
      } else if (result.isDenied) {
        Swal.fire('Cambios no guardados', '', 'info');
      }
    });
  }


  eliminarAuto(){
    Swal.fire({
      title: "Estas seguro?",
      text: "Si lo eliminas no podrás recuperarlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.autoService.deleteAuto(this.id);
        Swal.fire({
          title: "Eliminado!",
          text: "Se ha eliminado con éxito.",
          icon: "success"
        });
        this.router.navigate(['/lista']);
      }
    });
  }
}
