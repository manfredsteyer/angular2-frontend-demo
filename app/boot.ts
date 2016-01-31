import {bootstrap}    from 'angular2/platform/browser'
import {Component, provide}    from 'angular2/core'
import {FlugSuchen} from './flug-suchen/flug-suchen'
import {FlugService} from './services/flug-service';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

var services = [
  // FlugService // FlugService --> FlugService
  provide(FlugService, { useClass: FlugService}),
  HTTP_PROVIDERS
];

bootstrap(FlugSuchen, services);
