import { Component, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Character } from '../../model/character';
import { CHARACTERS } from '../../characters-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly platformId = inject(PLATFORM_ID);

  readonly allCharacters: Character[] = CHARACTERS;

  getCharacterLink(char: Character): string[] {
    if (char.campaign === 'inverno-de-ossos') {
      return ['/personagens/inverno-de-ossos', char.codename];
    }
    if (char.campaign === 'vida-e-morte') {
      return ['/personagens/vida-e-morte', char.codename];
    }
    return ['/personagens/one-shot', char.codename];
  }

  getCampaignBadge(char: Character): { text: string; cssClass: string } {
    if (char.campaign === 'inverno-de-ossos') {
      return { text: 'INVERNO', cssClass: 'badge-inverno' };
    }
    if (char.campaign === 'vida-e-morte') {
      return { text: 'VIDA & MORTE', cssClass: 'badge-vida-morte' };
    }
    return { text: 'ONE-SHOT', cssClass: 'badge-oneshot' };
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      const { animateMini, inView } = await import('motion');

      const panels = document.querySelectorAll('.sector-card');
      panels.forEach((panel, i) => {
        (panel as HTMLElement).style.opacity = '0';
        (panel as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          panel,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.5, delay: 0.1 + (i * 0.1), easing: [0.22, 1, 0.36, 1] } as any
        );
      });

      const roster = document.querySelector('.roster-section');
      if (roster) {
        (roster as HTMLElement).style.opacity = '0';
        (roster as HTMLElement).style.transform = 'translateY(20px)';
        inView(roster, () => {
          animateMini(
            roster,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.55, delay: 0.15, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.15 });
      }
    });
  }
}
