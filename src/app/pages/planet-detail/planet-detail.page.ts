import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.page.html',
  styleUrls: ['./planet-detail.page.scss'],
})
export class PlanetDetailPage implements OnInit {
  planet: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Detectar cambios en los parámetros de la ruta
    this.route.queryParamMap.subscribe(params => {
      const planetData = params.get('planet');
      if (planetData) {
        this.planet = JSON.parse(planetData);
      }
    });
  }
}
