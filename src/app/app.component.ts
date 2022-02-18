import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTitles = [
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galáxia Vol 1',
      relevance: 98,
      age: 0,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço'],
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galáxia Vol 2',
      relevance: 99,
      age: 12,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço'],
    },
    {
      trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
      cover: 'assets/images/guardios-da-galaxia.jpg',
      name: 'Guardiões da Galáxia Vol 3',
      relevance: 89,
      age: 14,
      parts: 2,
      categories: ['Épico', 'Filme de Fantasia', 'Viagem no Espaço'],
    },
  ];
}
