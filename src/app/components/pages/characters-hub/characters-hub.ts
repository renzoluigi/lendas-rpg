import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-characters-hub',
  standalone: true,
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './characters-hub.html',
  styleUrl: './characters-hub.scss',
})
export class CharactersHub {
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const introBanner = document.querySelector('.hub-intro');
      if (introBanner) {
        (introBanner as HTMLElement).style.opacity = '0';
        (introBanner as HTMLElement).style.transform = 'translateY(20px)';
        animateMini(
          introBanner,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.55, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const hubCards = document.querySelectorAll<HTMLElement>('.hero-card, .side-card, .archive-banner');
      hubCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(25px)';
        inView(card, () => {
          animateMini(
            card,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.5, delay: 0.15 + index * 0.1, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }
}
