import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'PZOaxQK3FShWHTSBOjity8IysTyKvF2CX695zsuq'; 

  constructor(private http: HttpClient) {}

  // Obtener imágenes en un rango de fechas (sin traducción)
  getApodRange(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?api_key=${this.apiKey}&start_date=${startDate}&end_date=${endDate}`);
  }
}