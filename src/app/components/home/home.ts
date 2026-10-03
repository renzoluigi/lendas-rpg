import { Component, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Character } from '../../model/character';
import { CHARACTERS } from '../../characters-data';
import { prefersReducedMotion } from '../../utils/reduced-motion';

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
      return ['/campanhas/inverno-de-ossos', char.codename];
    }
    if (char.campaign === 'vida-e-morte') {
      return ['/campanhas/vida-e-morte', char.codename];
    }
    return ['/campanhas/one-shot', char.codename];
  }

  getCampaignInfo(char: Character): { name: string; cssClass: string } {
    if (char.campaign === 'inverno-de-ossos') {
      return { name: 'Inverno de Ossos', cssClass: 'campaign-inverno' };
    }
    if (char.campaign === 'vida-e-morte') {
      return { name: 'Vida & Morte', cssClass: 'campaign-vida-morte' };
    }
    return { name: 'One-Shot', cssClass: 'campaign-oneshot' };
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
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
