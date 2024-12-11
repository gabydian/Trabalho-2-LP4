import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading,
PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from
'@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { Drivers } from '@ionic/storage';
import { importProvidersFrom } from '@angular/core';
bootstrapApplication(AppComponent, {
providers: [
{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
provideIonicAngular(),
provideRouter(routes, withPreloading(PreloadAllModules)),
importProvidersFrom(IonicStorageModule.forRoot({
name: 'mydb',
driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB,
Drivers.LocalStorage]
})),
],
});