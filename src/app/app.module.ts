import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; // Importar TranslateModule y TranslateLoader
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Importar TranslateHttpLoader
import { SharedModule } from './shared/shared.module';

// Función de fábrica para cargar traducciones
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Ruta donde estarán los archivos JSON de traducción
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({ // Configurar ngx-translate
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient], // HttpClient es necesario para cargar las traducciones
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
