import { Component } from '@angular/core';
import {Header} from '../../header/header';
import {CharactersSection} from '../../characters-section/characters-section';

@Component({
  selector: 'app-characters',
  imports: [
    Header,
    CharactersSection
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

}
