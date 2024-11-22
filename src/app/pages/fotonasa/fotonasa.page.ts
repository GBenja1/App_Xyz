import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/servicios/nasa.service';
import { TranslateService } from '@ngx-translate/core';
import { ImageStorageService } from 'src/app/servicios/images-storage.service';  // Importa el servicio de almacenamiento

@Component({
  selector: 'app-fotonasa',
  templateUrl: './fotonasa.page.html',
  styleUrls: ['./fotonasa.page.scss'],
})
export class FotonasaPage implements OnInit {
  images: any[] = [];
  selectedDate: string = ''; // Para la fecha seleccionada
  today: string = new Date().toISOString().split('T')[0]; // Fecha de hoy
  isLoading: boolean = false; // Controla si está cargando imágenes

  constructor(
    private nasaService: NasaService,
    private router: Router,
    private translate: TranslateService,
    private imageStorageService: ImageStorageService  // Inyecta el servicio de almacenamiento
  ) {
    this.translate.setDefaultLang('es'); // Idioma predeterminado
  }

  ngOnInit() {
    // Verificar si las imágenes ya están almacenadas en localStorage
    const storedImages = this.imageStorageService.getImages();
    if (storedImages.length > 0) {
      this.images = storedImages;
      this.isLoading = false;
    } else {
      this.loadImages();
    }
  }

  // Método para cargar imágenes desde la API
  loadImages() {
    this.isLoading = true; // Mostrar spinner
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const startDateString = startDate.toISOString().split('T')[0];

    this.nasaService.getApodRange(startDateString, endDate).subscribe(
      data => {
        this.images = data;
        this.isLoading = false;
        // Guardar las imágenes en localStorage
        this.imageStorageService.saveImages(data);
      },
      error => {
        console.error('Error al cargar imágenes:', error);
        this.isLoading = false;
      }
    );
  }

  // Buscar imágenes por fecha seleccionada
  fetchImagesByDate() {
    if (!this.selectedDate) {
      alert('Por favor, selecciona una fecha');
      return;
    }

    this.isLoading = true; // Mostrar spinner
    this.nasaService.getApodRange(this.selectedDate, this.selectedDate).subscribe(
      data => {
        if (data.length === 0) {
          alert('No hay imágenes disponibles para esta fecha');
        } else {
          this.images = data;
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error al buscar imágenes por fecha:', error);
        this.isLoading = false;
      }
    );
  }
  onDateChange(event: any) {
    this.selectedDate = event.detail.value.split('T')[0]; // Formato adecuado para la API
    this.fetchImagesByDate(); // Llamar a la búsqueda con la nueva fecha
  }
  // Limpiar la búsqueda y mostrar todas las imágenes
  clearSearch() {
    this.selectedDate = ''; // Limpiar la fecha seleccionada
    const endDate = new Date().toISOString().split('T')[0]; // Fecha actual
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const startDateString = startDate.toISOString().split('T')[0];

    this.loadImages(); // Mostrar todas las imágenes desde la fecha actual hasta hace 7 días
  }

  // Cambiar el idioma de la aplicación
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  // Navegar a los detalles de una imagen
  openDetails(image: any) {
    this.router.navigate(['/detallenasa', image.date]);
  }
}
