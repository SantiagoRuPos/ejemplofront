// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  crearUsuario(nombreUsuario: string, contrasena: string): Observable<any> {
    return this.http.post('http://localhost:3000/crear-usuario', { nombreUsuario, contrasena });
  }
  eliinar(nombreUsuario: string): Observable<any> {
    return this.http.post('http://localhost:3000/eliminar_usuario', { nombreUsuario });
  }

  listarImagenesDocker(): Observable<any> {
    return this.http.get('http://localhost:3000/listar-imagenes-docker');
  }
  enviarComando(comando: string) {
    return this.http.post('http://localhost:3000/comando', { comando });
  }
}
