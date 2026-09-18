import { Component, OnInit, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import {
  WORLD_OVERVIEW,
  FEDERATIONS_DATA,
  HUNTER_RANKS,
  PHYSICAL_ENHANCEMENTS,
  ALCHEMY_SYSTEM,
  WEAPON_FORGE_RULES,
  DOMAIN_EXPANSION_RULES,
  CONSTELLATIONS_DATA
} from '../../../archive-data';
import { Federation, HunterRank, PhysicalEnhancement } from '../../../model/archive';
import { prefersReducedMotion } from '../../../utils/reduced-motion';

export type ArchiveTab = 'diretrizes' | 'federacoes' | 'ranks' | 'sistemas' | 'dominios';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [
    CommonModule,
    Header,
    RouterLink
  ],
  templateUrl: './archive.html',
  styleUrl: './archive.scss'
})
export class Archive implements OnInit {
  activeTab: ArchiveTab = 'diretrizes';

  worldOverview = WORLD_OVERVIEW;
  federations = FEDERATIONS_DATA;
  hunterRanks = HUNTER_RANKS;
  physicalEnhancements = PHYSICAL_ENHANCEMENTS;
  alchemySystem = ALCHEMY_SYSTEM;
  weaponRules = WEAPON_FORGE_RULES;
  domainRules = DOMAIN_EXPANSION_RULES;
  constellations = CONSTELLATIONS_DATA;

  selectedRegion = 'TODAS';
  searchQuery = '';
  selectedRank: HunterRank = HUNTER_RANKS[7]; // Default to SS - O Mais Forte

  // Track active level for each enhancement (1, 2, or 3)
  selectedEnhancementLevels: Record<string, number> = {
    forca: 2,
    velocidade: 2,
    resistencia: 2,
    sentidos: 2,
    especiais: 2
  };

  private readonly platformId = inject(PLATFORM_ID);

  get regions(): string[] {
    const list = new Set<string>();
    this.federations.forEach(f => list.add(f.region));
    return ['TODAS', ...Array.from(list)];
  }

  get filteredFederations(): Federation[] {
    return this.federations.filter(f => {
      const matchRegion = this.selectedRegion === 'TODAS' || f.region === this.selectedRegion;
      const q = this.searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        f.name.toLowerCase().includes(q) ||
        f.mythologicalOrigin.toLowerCase().includes(q) ||
        f.countries.some(c => c.toLowerCase().includes(q));
      return matchRegion && matchQuery;
    });
  }

  ngOnInit(): void {
    // Initial setup if needed
  }

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId) || prefersReducedMotion()) return;
      const { animateMini } = await import('motion');
      const banner = document.querySelector('.archive-hero');
      if (banner) {
        animateMini(
          banner as HTMLElement,
          { opacity: [0, 1], transform: ['translateY(15px)', 'translateY(0px)'] },
          { duration: 0.5, easing: [0.22, 1, 0.36, 1] } as any
        );
      }
    });
  }

  setTab(tab: ArchiveTab): void {
    this.activeTab = tab;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  }

  selectRank(rank: HunterRank): void {
    this.selectedRank = rank;
  }

  setEnhancementLevel(enhancementId: string, level: number): void {
    this.selectedEnhancementLevels[enhancementId] = level;
  }

  getEnhancementLevel(enhancementId: string): number {
    return this.selectedEnhancementLevels[enhancementId] || 1;
  }
}
