// app.component.ts
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombreUsuario: string = '';
  contrasena: string = '';
  imagenes: string = '';
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.listarImagenesDocker();
  }

  listarImagenesDocker() {
    this.userService.listarImagenesDocker().subscribe(
      (data: any) => {
        this.imagenes = data.images;
      },
      (error: any) => {
        console.error('Error al obtener las imágenes de Docker:', error);
      }
    );
  }

  crearUsuario() {
    this.userService.crearUsuario(this.nombreUsuario, this.contrasena).subscribe(
      response => {
        console.log('Usuario creado correctamente');
        // Lógica adicional después de crear el usuario
      },
      error => {
        console.error('Error al crear el usuario:', error);
        // Manejo de errores
      }
    );
  }
  eliminar(){
    this.userService.eliinar(this.nombreUsuario).subscribe(
      response => {
        console.log('se fue');
      }, 
      error => {
        console.error('no se fue', error);
      }
    )
  }
}
