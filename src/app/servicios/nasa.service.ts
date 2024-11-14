import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'PZOaxQK3FShWHTSBOjity8IysTyKvF2CX695zsuq'; 
  private deeplUrl = 'https://api-free.deepl.com/v2/translate';
  private deeplApiKey = 'ca05d9c4-0373-41bc-bb00-bba13ff17482:fx'; // Reemplaza con tu API Key de DeepL

  constructor(private http: HttpClient) {}


  // Obtener imágenes en un rango de fechas y traducir títulos y explicaciones
  getApodRange(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?api_key=${this.apiKey}&start_date=${startDate}&end_date=${endDate}`).pipe(
      switchMap(images => {
        const translationRequests = images.map(image =>
          forkJoin({
            translatedTitle: this.translateText(image.title),
            translatedExplanation: this.translateText(image.explanation)
          }).pipe(
            map(({ translatedTitle, translatedExplanation }) => ({
              ...image,
              title: translatedTitle,
              explanation: translatedExplanation
            }))
          )
        );
        return forkJoin(translationRequests);
      })
    );
  }

  translateText(text: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('auth_key', this.deeplApiKey);
    body.set('text', text);
    body.set('target_lang', 'ES');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(this.deeplUrl, body.toString(), { headers }).pipe(
      map(response => response.translations[0].text)
    );
  }
}