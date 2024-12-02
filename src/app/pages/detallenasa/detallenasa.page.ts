import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from 'src/app/servicios/nasa.service';
import { DeepLTranslateService } from 'src/app/servicios/deepl-translate.service'; // Importa el servicio de DeepL
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-detallenasa',
  templateUrl: './detallenasa.page.html',
  styleUrls: ['./detallenasa.page.scss'],
})
export class DetallenasaPage implements OnInit {
  image: any;

  constructor(
    private route: ActivatedRoute,
    private nasaService: NasaService,
    private deeplTranslate: DeepLTranslateService,  // Inyecta el servicio de DeepL
    private location: Location,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const date = this.route.snapshot.paramMap.get('date');
    this.nasaService.getApodRange(date, date).subscribe(async data => {
      const image = data[0];
      this.image = {
        ...image,
        title: await this.deeplTranslate.translateText(image.title, 'es').toPromise(),
        explanation: await this.deeplTranslate.translateText(image.explanation, 'es').toPromise(),
        sanitizedUrl: image.media_type === 'video' 
          ? this.sanitizer.bypassSecurityTrustResourceUrl(image.url) 
          : image.url
      };
    });
  }


  changeLanguage(lang: string) {
    // Cambiar el idioma de la aplicación
  }

  goBack() {
    this.location.back(); // Método para regresar a la página anterior
  }
}
