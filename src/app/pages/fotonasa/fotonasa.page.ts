import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/servicios/nasa.service';
import { DeepLTranslateService } from 'src/app/servicios/deepl-translate.service'; // Importar el servicio de traducción
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-fotonasa',
  templateUrl: './fotonasa.page.html',
  styleUrls: ['./fotonasa.page.scss'],
})
export class FotonasaPage implements OnInit {
  images: any[] = [];
  selectedDate: string = '';
  today: string = new Date().toISOString().split('T')[0];
  isLoading: boolean = false;

  constructor(
    private nasaService: NasaService,
    private router: Router,
    private deeplTranslate: DeepLTranslateService,  // Usamos DeepL para traducción
    private sanitizer: DomSanitizer // Inyectar el servicio
  ) {}

  ngOnInit() {
    this.loadImages();  // Cargar imágenes al iniciar
  }

  loadImages() {
    this.isLoading = true;
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const startDateString = startDate.toISOString().split('T')[0];
  
    this.nasaService.getApodRange(startDateString, endDate).subscribe(
      async data => {
        // Traducir el título y la descripción, y manejar videos
        const translatedData = await Promise.all(
          data.map(async (item) => ({
            ...item,
            title: await this.deeplTranslate.translateText(item.title, 'es').toPromise(),
            explanation: await this.deeplTranslate.translateText(item.explanation, 'es').toPromise(),
            url: item.media_type === 'video' 
              ? this.sanitizer.bypassSecurityTrustResourceUrl(item.url) 
              : item.url // Sanitizar videos y dejar imágenes sin cambios
          }))
        );
        this.images = translatedData;
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar imágenes:', error);
        this.isLoading = false;
      }
    );
  }

  fetchImagesByDate() {
    if (!this.selectedDate) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    this.isLoading = true;
    this.nasaService.getApodRange(this.selectedDate, this.selectedDate).subscribe(
      async data => {
        const translatedData = await Promise.all(
          data.map(async (image) => ({
            ...image,
            title: await this.deeplTranslate.translateText(image.title, 'es').toPromise(),
            explanation: await this.deeplTranslate.translateText(image.explanation, 'es').toPromise(),
          }))
        );
        this.images = translatedData;
        this.isLoading = false;
      },
      error => {
        console.error('Error al buscar imágenes por fecha:', error);
        this.isLoading = false;
      }
    );
  }

  // Funciones adicionales (onDateChange, clearSearch, etc.)
  onDateChange(event: any) {
    this.selectedDate = event.detail.value.split('T')[0];
    this.fetchImagesByDate();
  }

  clearSearch() {
    this.selectedDate = '';
    this.loadImages(); 
  }

  changeLanguage(lang: string) {
    // Funcionalidad de cambio de idioma
  }

  openDetails(image: any) {
    this.router.navigate(['/detallenasa', image.date]);
  }
}
