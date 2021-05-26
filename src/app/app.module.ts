import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app, en este caso español y luego francés. El inglés lo tiene siempre por defecto
import  localeES from '@angular/common/locales/es';
import  localeFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'//Con esto establecemos idioma y temas de monedas en la app, en este caso español
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
