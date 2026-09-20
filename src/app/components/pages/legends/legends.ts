import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser, UpperCasePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { Legend } from '../../../model/legend';
import { LEGENDS } from '../../../legends-data';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-legends',
  standalone: true,
  imports: [Header, RouterLink, UpperCasePipe, NgClass],
  templateUrl: './legends.html',
  styleUrl: './legends.scss'
})
export class Legends {
  legends: Legend[] = LEGENDS;
  selectedLegend: Legend | null = null;
  activeFilter: string = 'all';

  private readonly platformId = inject(PLATFORM_ID);

  get filteredLegends(): Legend[] {
    if (this.activeFilter === 'all') return this.legends;
    return this.legends.filter(l => l.campaign === this.activeFilter || l.mythology.toLowerCase().includes(this.activeFilter.toLowerCase()));
  }

  getFilterCount(filter: string): number {
    if (filter === 'all') return this.legends.length;
    return this.legends.filter(l => l.campaign === filter || l.mythology.toLowerCase().includes(filter.toLowerCase())).length;
  }

  getMythologyClass(mythology: string): string {
    const map: Record<string, string> = {
      'mitologia egípcia': 'myth-egyptian',
      'mitologia nórdica': 'myth-norse',
      'mitologia tupi-guarani': 'myth-tupi',
      'mitologia grega': 'myth-greek',
      'mitologia japonesa': 'myth-japanese',
    };
    return map[mythology.toLowerCase()] || 'myth-default';
  }

  getThreatClass(threatLevel: string): string {
    const level = threatLevel.toLowerCase();
    if (level.includes('lendária') || level.includes('lendaria')) return 'threat-legendary';
    if (level.includes('criatura')) return 'threat-creature';
    if (level.includes('espírito') || level.includes('espirito')) return 'threat-spirit';
    return 'threat-default';
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  openLegend(legend: Legend): void {
    this.selectedLegend = legend;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeLegend(): void {
    this.selectedLegend = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const hero = document.querySelector('.legends-hero');
      if (hero) {
        (hero as HTMLElement).style.opacity = '0';
        (hero as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          hero,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

      const cards = document.querySelectorAll<HTMLElement>('.legend-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        inView(card, () => {
          animateMini(
            card,
            { opacity: 1, transform: 'translateY(0px)' },
            { duration: 0.45, delay: (i % 3) * 0.1, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.1 });
      });
    });
  }
}
