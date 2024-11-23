import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeepLTranslateService {
  private deeplUrl = 'https://api-free.deepl.com/v2/translate';  // URL de la API de DeepL
  private deeplApiKey = 'e8736c4c-1468-41c1-8c79-64c521b37234:fx';  // Reemplaza con tu clave de API

  constructor(private http: HttpClient) {}

  translateText(text: string, targetLang: string = 'es', sourceLang: string = 'EN'): Observable<string> {
    const cacheKey = `deepl_translation_${sourceLang}_${targetLang}_${text}`;

    // Revisamos si la traducción ya está en cache (localStorage)
    const cachedTranslation = localStorage.getItem(cacheKey);
    if (cachedTranslation) {
      // Si está en cache, devolvemos la traducción almacenada
      return of(cachedTranslation);
    } else {
      // Si no está en cache, realizamos la solicitud a la API de DeepL
      const body = new URLSearchParams();
      body.set('auth_key', this.deeplApiKey);
      body.set('text', text);
      body.set('target_lang', targetLang);

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      return this.http.post<any>(this.deeplUrl, body.toString(), { headers }).pipe(
        map(response => {
          const translatedText = response.translations[0].text;
          // Guardamos la traducción en localStorage para futuras consultas
          localStorage.setItem(cacheKey, translatedText);
          return translatedText;
        })
      );
    }
  }
}
