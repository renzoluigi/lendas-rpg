import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { INVERNO_SESSIONS } from '../../../sessions-data';
import { CampaignDay } from '../../../model/session';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-campaign-calendar',
  standalone: true,
  imports: [Header, RouterLink],
  templateUrl: './campaign-calendar.html',
  styleUrl: './campaign-calendar.scss'
})
export class CampaignCalendar {
  days: CampaignDay[] = INVERNO_SESSIONS;
  private readonly platformId = inject(PLATFORM_ID);

  get availableDays(): number {
    return this.days.filter(d => d.status === 'disponivel').length;
  }

  get totalDays(): number {
    return this.days.length;
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const hero = document.querySelector('.calendar-hero');
      if (hero) {
        (hero as HTMLElement).style.opacity = '0';
        (hero as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          hero,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const cells = document.querySelectorAll<HTMLElement>('.calendar-cell');
      cells.forEach((cell, i) => {
        cell.style.opacity = '0';
        cell.style.transform = 'scale(0.92)';
        inView(cell, () => {
          animateMini(
            cell,
            { opacity: 1, transform: 'scale(1)' },
            { duration: 0.35, delay: (i % 6) * 0.04, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }
}
