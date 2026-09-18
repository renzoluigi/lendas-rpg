import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { Character } from '../../../model/character';
import { CANON_CHARACTERS } from '../../../characters-data';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-archive-canon',
  standalone: true,
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './archive-canon.html',
  styleUrl: './archive-canon.scss'
})
export class ArchiveCanon {
  characters: Character[] = CANON_CHARACTERS;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const hero = document.querySelector('.hero-details');
      if (hero) {
        (hero as HTMLElement).style.opacity = '0';
        (hero as HTMLElement).style.transform = 'translateY(20px)';
        animateMini(
          hero,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.05, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const cards = document.querySelectorAll<HTMLElement>('.canon-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        inView(card, () => {
          animateMini(
            card,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.5, delay: (i % 3) * 0.1, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.15 });
      });
    });
  }
}
