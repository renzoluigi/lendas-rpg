import { Component, inject, OnInit, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Character } from '../../../model/character';
import { Ability } from '../../../model/ability';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CHARACTERS } from '../../../characters-data';

@Component({
  selector: 'app-character-record-vida-e-morte',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './character-record-vida-e-morte.html',
  styleUrl: './character-record-vida-e-morte.scss',
})
export class CharacterRecordVidaEMorte implements OnInit {
  private route = inject(ActivatedRoute);
  private readonly platformId = inject(PLATFORM_ID);

  character?: Character;
  domainExpansion?: Ability;
  regularAbilities: Ability[] = [];
  backUrl: string = '/personagens/vida-e-morte';

  ngOnInit() {
    let codenameParam = this.route.snapshot.paramMap.get("codename");

    if (!codenameParam) {
      // Check if URL directly contains josh or sen
      const path = this.route.snapshot.url.map(u => u.path).join('/').toLowerCase();
      if (path.includes('josh')) codenameParam = 'josh';
      else if (path.includes('sen')) codenameParam = 'sen';
    }

    if (codenameParam) {
      codenameParam = codenameParam.toLowerCase();
      this.character = CHARACTERS.find(char => char.codename.toLowerCase() === codenameParam);
    }

    if (this.character) {
      this.domainExpansion = this.character.abilities.find(a => 
        a.name.toLowerCase().includes('expansão de domínio') || a.name.toLowerCase().includes('expansao de dominio')
      );
      this.regularAbilities = this.character.abilities.filter(a => a !== this.domainExpansion);
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

      const domainCard = document.querySelector('.domain-expansion-card');
      if (domainCard) {
        (domainCard as HTMLElement).style.opacity = '0';
        (domainCard as HTMLElement).style.transform = 'scale(0.96) translateY(20px)';
        inView(domainCard as HTMLElement, () => {
          animateMini(
            domainCard,
            { opacity: 1, transform: 'scale(1) translateY(0px)' },
            { duration: 0.65, delay: 0.1, easing: [0.22, 1, 0.36, 1] } as any
          );
        }, { amount: 0.2 });
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
