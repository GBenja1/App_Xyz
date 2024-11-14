import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NasaService } from 'src/app/servicios/nasa.service';
import { Location } from '@angular/common';

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
    private location: Location 
  ) {}

  ngOnInit() {
    const date = this.route.snapshot.paramMap.get('date');
    if (date) {
      this.nasaService.getApodRange(date, date).subscribe(data => {
        this.image = data[0];
      });
    }
  }

  goBack() {
    this.location.back(); // Método para regresar a la página anterior
  }
}