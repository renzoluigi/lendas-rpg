import {Component} from '@angular/core';
import {Character} from '../../model/character';
import {CHARACTERS} from '../../characters-data';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'characters-section',
  imports: [
    RouterLink
  ],
  templateUrl: './characters-section.html',
  styleUrl: './characters-section.scss',
})
export class CharactersSection{
  characters: Character[] = CHARACTERS;
}
