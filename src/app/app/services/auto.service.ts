import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Auto } from 'src/app/components/perfil/auto';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  endPoint: string = 'https://car-view.onrender.com/api/cars';

  constructor(private http: HttpClient) {}

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(this.endPoint);
  }

  getAutoById(id: number): Observable<Auto> {
    return this.http.get<Auto>(`${this.endPoint}/${id}`);
  }

  saveAuto(auto: Auto): Observable<Auto> {
    return this.http.post<Auto>(this.endPoint, auto);
  }

  updateAuto(auto: Auto, id: number): Observable<Auto> {
    return this.http.put<Auto>(`${this.endPoint}/${id}`, auto);
  }

  deleteAuto(id: number): Observable<Auto> {
    return this.http.delete<Auto>(`${this.endPoint}/${id}`);
  }


}
