import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'PZOaxQK3FShWHTSBOjity8IysTyKvF2CX695zsuq';
  private deeplUrl = 'https://api-free.deepl.com/v2/translate';
  private deeplApiKey = 'e8736c4c-1468-41c1-8c79-64c521b37234:fx'; // Reemplázala con tu clave de API

  constructor(private http: HttpClient) {}

  // Obtener imágenes en un rango de fechas con traducción
  getApodRange(startDate: string, endDate: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?api_key=${this.apiKey}&start_date=${startDate}&end_date=${endDate}`).pipe(
      switchMap(images => {
        // Traducir título y descripción de cada imagen
        const translationRequests = images.map(image =>
          forkJoin({
            translatedTitle: this.translateTextWithCache(image.title, 'ES'),
            translatedExplanation: this.translateTextWithCache(image.explanation, 'ES')
          }).pipe(
            map(translations => ({
              ...image,
              title: translations.translatedTitle,
              explanation: translations.translatedExplanation
            }))
          )
        );
        return forkJoin(translationRequests);
      })
    );
  }

  // Método para traducir texto y almacenarlo en el cache
  private translateTextWithCache(text: string, targetLang: string): Observable<string> {
    const cacheKey = `deepl_${targetLang}_${text}`;
    const cachedTranslation = localStorage.getItem(cacheKey);

    if (cachedTranslation) {
      // Devolver traducción almacenada en cache
      return new Observable(observer => {
        observer.next(cachedTranslation);
        observer.complete();
      });
    } else {
      // Realizar traducción con DeepL
      const body = new URLSearchParams();
      body.set('auth_key', this.deeplApiKey);
      body.set('text', text);
      body.set('target_lang', targetLang);

      return this.http.post<any>(this.deeplUrl, body.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).pipe(
        map(response => {
          const translatedText = response.translations[0].text;
          localStorage.setItem(cacheKey, translatedText); // Almacenar traducción en cache
          return translatedText;
        })
      );
    }
  }
}
