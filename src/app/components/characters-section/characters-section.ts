import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Character } from '../../model/character';
import { ONE_SHOT_CHARACTERS } from '../../characters-data';
import { RouterLink } from '@angular/router';
import { prefersReducedMotion } from '../../utils/reduced-motion';

@Component({
  selector: 'characters-section',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './characters-section.html',
  styleUrl: './characters-section.scss',
})
export class CharactersSection {
  characters: Character[] = ONE_SHOT_CHARACTERS;
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const cards = document.querySelectorAll<HTMLElement>('.character-card');
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
