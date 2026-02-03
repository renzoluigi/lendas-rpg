import {Component, inject, OnInit} from '@angular/core';
import {Character} from '../../../model/character';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CHARACTERS} from '../../../characters-data';

@Component({
  selector: 'app-character-record',
  imports: [
    RouterLink
  ],
  templateUrl: './character-record.html',
  styleUrl: './character-record.scss',
})
export class CharacterRecord implements OnInit{
  private route = inject(ActivatedRoute)

  character?: Character;

  ngOnInit() {
    let codenameParam = this.route.snapshot.paramMap.get("codename")

    if (codenameParam) {
      codenameParam = codenameParam.toLowerCase();
      this.character = CHARACTERS.find(char => char.codename.toLowerCase() == codenameParam);
    }
  }
}
