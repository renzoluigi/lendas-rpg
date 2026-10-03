import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { INVERNO_SESSIONS } from '../../../sessions-data';
import { CampaignDay } from '../../../model/session';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-session-detail',
  standalone: true,
  imports: [Header, RouterLink],
  templateUrl: './session-detail.html',
  styleUrl: './session-detail.scss'
})
export class SessionDetail {
  session: CampaignDay | null = null;
  copiedPromptTitle: string | null = null;
  private route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  copyPrompt(title: string, promptText: string): void {
    if (isPlatformBrowser(this.platformId) && navigator?.clipboard) {
      navigator.clipboard.writeText(promptText);
      this.copiedPromptTitle = title;
      setTimeout(() => {
        if (this.copiedPromptTitle === title) {
          this.copiedPromptTitle = null;
        }
      }, 2500);
    }
  }

  constructor() {
    const dayParam = Number(this.route.snapshot.paramMap.get('day'));
    if (dayParam && dayParam >= 1 && dayParam <= 30) {
      this.session = INVERNO_SESSIONS.find(s => s.day === dayParam) ?? null;
    }

    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const hero = document.querySelector('.session-hero');
      if (hero) {
        (hero as HTMLElement).style.opacity = '0';
        (hero as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          hero,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const blocks = document.querySelectorAll<HTMLElement>('.session-block, .enemy-card, .loot-section, .levelup-section');
      blocks.forEach((block, i) => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        inView(block, () => {
          animateMini(
            block,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.4, delay: i * 0.06, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }

  getEventTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      'combate': 'COMBATE',
      'investigacao': 'INVESTIGAÇÃO',
      'roleplay': 'ROLEPLAY',
      'descanso': 'DESCANSO',
      'viagem': 'VIAGEM'
    };
    return labels[type] ?? type.toUpperCase();
  }
}
