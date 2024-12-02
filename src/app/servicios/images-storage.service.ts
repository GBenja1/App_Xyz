import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService {

  constructor() {}

  // Guardar las imágenes en localStorage
  saveImages(images: any[]): void {
    localStorage.setItem('nasaImages', JSON.stringify(images)); 
  }

  // Obtener las imágenes de localStorage
  getImages(): any[] {
    const storedImages = localStorage.getItem('nasaImages');
    return storedImages ? JSON.parse(storedImages) : [];  
  }

  // Limpiar las imágenes de localStorage
  clearImages(): void {
    localStorage.removeItem('nasaImages');
  }
}