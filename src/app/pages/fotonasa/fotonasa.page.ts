import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/servicios/nasa.service';
import { TranslateService } from '@ngx-translate/core'; // Importar TranslateService

@Component({
  selector: 'app-fotonasa',
  templateUrl: './fotonasa.page.html',
  styleUrls: ['./fotonasa.page.scss'],
})
export class FotonasaPage implements OnInit {
  images: any[] = [];

  constructor(
    private nasaService: NasaService,
    private router: Router,
    private translate: TranslateService // Inyectar el servicio de traducción
  ) {
    this.translate.setDefaultLang('es'); // Idioma predeterminado: Español
  }

  ngOnInit() {
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const startDateString = startDate.toISOString().split('T')[0];

    this.nasaService.getApodRange(startDateString, endDate).subscribe(data => {
      this.images = data;
    });
  }

  openDetails(image: any) {
    this.router.navigate(['/detallenasa', image.date]);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Cambiar el idioma dinámicamente
  }
}
