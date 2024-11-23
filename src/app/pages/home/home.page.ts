import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  planets = [
    { 
      name: 'Mercurio', 
      size: '2,439.7 km', 
      distance: '57.91 millones km', 
      color: 'gray', 
      image: 'assets/imagenes/mercurio.png' 
    },
    { 
      name: 'Venus', 
      size: '6,051.8 km', 
      distance: '108.2 millones km', 
      color: 'yellow', 
      image: 'assets/imagenes/venus.png' 
    },
    { 
      name: 'Tierra', 
      size: '6,371 km', 
      distance: '149.6 millones km', 
      color: 'blue', 
      image: 'assets/imagenes/tierra.png' 
    },
    { 
      name: 'Marte', 
      size: '3,389.5 km', 
      distance: '227.9 millones km', 
      color: 'red', 
      image: 'assets/imagenes/marte.png' 
    },
    { 
      name: 'Júpiter', 
      size: '69,911 km', 
      distance: '778.5 millones km', 
      color: 'orange', 
      image: 'assets/imagenes/jupiter.png' 
    },
    { 
      name: 'Saturno', 
      size: '58,232 km', 
      distance: '1,429 millones km', 
      color: 'gold', 
      image: 'assets/imagenes/saturno.png' 
    },
    { 
      name: 'Urano', 
      size: '25,362 km', 
      distance: '2,871 millones km', 
      color: 'lightblue', 
      image: 'assets/imagenes/urano.png' 
    },
    { 
      name: 'Neptuno', 
      size: '24,622 km', 
      distance: '4,495 millones km', 
      color: 'darkblue', 
      image: 'assets/imagenes/neptuno.png' 
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // Navegar a la página de detalles con el nombre del planeta como parámetro
  showDetails(planet: any) {
    this.router.navigate(['/planet-detail'], {
      queryParams: { planet: JSON.stringify(planet) },
    });
  }
}

