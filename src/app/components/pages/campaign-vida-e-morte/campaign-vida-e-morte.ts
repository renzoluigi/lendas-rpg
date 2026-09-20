import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import { Character } from '../../../model/character';
import { VIDA_E_MORTE_CHARACTERS, VIDA_E_MORTE_CANON_CHARACTERS } from '../../../characters-data';
import { Mission } from '../../../model/mission';
import { VIDA_E_MORTE_MISSIONS } from '../../../missions-data';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

@Component({
  selector: 'app-campaign-vida-e-morte',
  standalone: true,
  imports: [
    Header,
    RouterLink,
    UpperCasePipe
  ],
  templateUrl: './campaign-vida-e-morte.html',
  styleUrl: './campaign-vida-e-morte.scss'
})
export class CampaignVidaEMorte {
  characters: Character[] = VIDA_E_MORTE_CHARACTERS;
  canonCharacters: Character[] = VIDA_E_MORTE_CANON_CHARACTERS;
  missions: Mission[] = VIDA_E_MORTE_MISSIONS;

  activeMissionModal: Mission | null = null;
  private readonly platformId = inject(PLATFORM_ID);

  openMissionReader(mission: Mission): void {
    this.activeMissionModal = mission;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeMissionReader(): void {
    this.activeMissionModal = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini, inView } = await import('motion');

      const archiveCard = document.querySelector('.archive-card');
      if (archiveCard) {
        (archiveCard as HTMLElement).style.opacity = '0';
        (archiveCard as HTMLElement).style.transform = 'translateY(24px)';
        animateMini(
          archiveCard,
          { opacity: 1, transform: 'translateY(0px)' },
          { duration: 0.6, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
        );
      }

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
