import { Component, inject, OnInit, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Character } from '../../../model/character';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CHARACTERS } from '../../../characters-data';

@Component({
  selector: 'app-character-record',
  imports: [
    RouterLink
  ],
  templateUrl: './character-record.html',
  styleUrl: './character-record.scss',
})
export class CharacterRecord implements OnInit {
  private route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  character?: Character;

  ngOnInit() {
    let codenameParam = this.route.snapshot.paramMap.get("codename");

    if (codenameParam) {
      codenameParam = codenameParam.toLowerCase();
      this.character = CHARACTERS.find(char => char.codename.toLowerCase() == codenameParam);
    }
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      const { animateMini, inView } = await import('motion');

      const sidebar = document.querySelector('.sidebar-identity');
      if (sidebar) {
        (sidebar as HTMLElement).style.opacity = '0';
        (sidebar as HTMLElement).style.transform = 'translateX(-28px)';
        animateMini(
          sidebar,
          { opacity: 1, transform: 'translateX(0px)' },
          { duration: 0.65, delay: 0.05, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const logoSeal = document.querySelector('.logo-lendas-small');
      if (logoSeal) {
        (logoSeal as HTMLElement).style.opacity = '0';
        (logoSeal as HTMLElement).style.transform = 'translateX(-50%) translateY(14px) scale(0.92)';
        animateMini(
          logoSeal,
          { opacity: 1, transform: 'translateX(-50%) translateY(0px) scale(1)' },
          { duration: 0.55, delay: 0.4, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const dossieHeader = document.querySelector('.dossie-header');
      if (dossieHeader) {
        (dossieHeader as HTMLElement).style.opacity = '0';
        (dossieHeader as HTMLElement).style.transform = 'translateY(-14px)';
        animateMini(
          dossieHeader,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.5, delay: 0.2, easing: [0.25, 0.1, 0.25, 1] } as any
        );
      }

      const contentBlocks = document.querySelectorAll('.parchment, .history-text, .weapon-box');
      contentBlocks.forEach((block, i) => {
        (block as HTMLElement).style.opacity = '0';
        (block as HTMLElement).style.transform = 'translateY(24px)';
        inView(block as HTMLElement, () => {
          animateMini(
            block,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.5, delay: i * 0.08, easing: [0.25, 0.1, 0.25, 1] } as any
          );
        }, { amount: 0.15 });
      });

      const abilityCards = Array.from(document.querySelectorAll<HTMLElement>('.ability-card'));
      abilityCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
      });

      const abilitiesSection = document.querySelector('.abilities');
      if (abilitiesSection) {
        inView(abilitiesSection as HTMLElement, () => {
          abilityCards.forEach((card, i) => {
            animateMini(
              card,
              { opacity: 1, transform: 'translateY(0px)' },
              { duration: 0.45, delay: 0.1 + i * 0.09, easing: [0.25, 0.1, 0.25, 1] } as any
            );
          });
        }, { amount: 0.1 });
      }
    });
  }
}
