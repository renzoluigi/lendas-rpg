import { Component, inject, OnInit, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Character } from '../../../model/character';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CHARACTERS } from '../../../characters-data';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

import { NavigationHistoryService } from '../../../services/navigation-history.service';

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
  private router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private navHistory = inject(NavigationHistoryService);

  character?: Character;
  backUrl: string = '/personagens/one-shot';

  goBack(): void {
    this.navHistory.goBack(this.backUrl);
  }

  ngOnInit() {
    let codenameParam = this.route.snapshot.paramMap.get("codename");

    if (codenameParam) {
      codenameParam = codenameParam.toLowerCase();
      this.character = CHARACTERS.find(char => char.codename.toLowerCase() == codenameParam);
    }

    const currentUrl = this.route.snapshot.pathFromRoot
      .map(segment => segment.url.map(u => u.path).join('/'))
      .filter(Boolean)
      .join('/');

    if (this.character?.campaign === 'vida-e-morte' && !currentUrl.includes('vida-e-morte')) {
      this.router.navigate(['/personagens/vida-e-morte', this.character.codename]);
      return;
    }

    if (currentUrl.includes('inverno-de-ossos') || this.character?.campaign === 'inverno-de-ossos') {
      this.backUrl = '/personagens/inverno-de-ossos';
    } else if (currentUrl.includes('vida-e-morte') || this.character?.campaign === 'vida-e-morte') {
      this.backUrl = '/personagens/vida-e-morte';
    } else {
      this.backUrl = '/personagens/one-shot';
    }
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (prefersReducedMotion()) return;
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

      const contentBlocks = document.querySelectorAll('.lore-panel, .history-panel, .weapon-card');
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

      const abilityCards = Array.from(document.querySelectorAll<HTMLElement>('.technique-card'));
      abilityCards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        inView(card, () => {
          animateMini(
            card,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.45, delay: (i % 3) * 0.08, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }
}
