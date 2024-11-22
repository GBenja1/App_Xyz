import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor() {}

  // Guardar las imágenes en localStorage
  saveImages(images: any[]): void {
    localStorage.setItem('nasaImages', JSON.stringify(images));  // Guardamos como cadena JSON
  }

  // Obtener las imágenes de localStorage
  getImages(): any[] {
    const storedImages = localStorage.getItem('nasaImages');
    return storedImages ? JSON.parse(storedImages) : [];  // Devuelve el arreglo de imágenes
  }

  // Limpiar las imágenes de localStorage
  clearImages(): void {
    localStorage.removeItem('nasaImages');
  }
}