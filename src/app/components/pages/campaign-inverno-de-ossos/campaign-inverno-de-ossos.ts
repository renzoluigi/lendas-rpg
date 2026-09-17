import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { Character } from '../../../model/character';
import { INVERNO_CHARACTERS } from '../../../characters-data';

@Component({
  selector: 'app-campaign-inverno-de-ossos',
  standalone: true,
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './campaign-inverno-de-ossos.html',
  styleUrl: './campaign-inverno-de-ossos.scss'
})
export class CampaignInvernoDeOssos {
  characters: Character[] = INVERNO_CHARACTERS;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      const { animateMini, inView } = await import('motion');

      const hero = document.querySelector('.campaign-hero');
      if (hero) {
        (hero as HTMLElement).style.opacity = '0';
        (hero as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          hero,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const cards = document.querySelectorAll<HTMLElement>('.character-card, .recruit-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        inView(card, () => {
          animateMini(
            card,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.45, delay: (i % 4) * 0.08, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }
}
