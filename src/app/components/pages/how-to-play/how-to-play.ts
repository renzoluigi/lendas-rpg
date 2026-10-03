import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';
import {
  HUNTER_FUNCTIONS,
  CERNES_DATA,
  FEDERATIONS_LIST,
  IMAGE_PLACEHOLDERS,
  HunterFunction,
  CerneInfo,
  FederationGuideItem,
  ImagePlaceholderItem
} from '../../../how-to-play-data';

export type GuideTab =
  | 'mundo'
  | 'federacoes'
  | 'broche'
  | 'criacao'
  | 'combate'
  | 'cerne'
  | 'dominio'
  | 'constelacoes'
  | 'prompts';

@Component({
  selector: 'app-how-to-play',
  standalone: true,
  imports: [CommonModule, RouterLink, Header],
  templateUrl: './how-to-play.html',
  styleUrl: './how-to-play.scss'
})
export class HowToPlay {
  private readonly platformId = inject(PLATFORM_ID);

  activeTab = signal<GuideTab>('mundo');
  copiedPromptId = signal<string | null>(null);

  // Data
  functions = HUNTER_FUNCTIONS;
  cernes = CERNES_DATA;
  federations = FEDERATIONS_LIST;
  imagePlaceholders = IMAGE_PLACEHOLDERS;

  // Selected details
  selectedFunction = signal<HunterFunction>(HUNTER_FUNCTIONS[0]);
  selectedCerne = signal<CerneInfo>(CERNES_DATA[0]);

  // Turn Simulation state
  selectedMoveAction = signal<string>('deslocamento');
  selectedAttackAction = signal<string>('ataque_arma');

  setTab(tab: GuideTab): void {
    this.activeTab.set(tab);
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  }

  selectFunction(fn: HunterFunction): void {
    this.selectedFunction.set(fn);
  }

  selectCerne(cerne: CerneInfo): void {
    this.selectedCerne.set(cerne);
  }

  copyPrompt(item: ImagePlaceholderItem): void {
    if (!isPlatformBrowser(this.platformId)) return;

    navigator.clipboard.writeText(item.promptEn).then(() => {
      this.copiedPromptId.set(item.id);
      setTimeout(() => {
        if (this.copiedPromptId() === item.id) {
          this.copiedPromptId.set(null);
        }
      }, 3000);
    });
  }

  getTurnVerdict(): { valid: boolean; message: string } {
    const move = this.selectedMoveAction();
    const atk = this.selectedAttackAction();

    if (move === 'tecnica_ataque' && atk === 'tecnica_ataque') {
      return {
        valid: false,
        message: 'Combinação Inválida: Não é permitido usar duas Técnicas de Ataque no mesmo turno!'
      };
    }

    if (move === 'deslocamento_extra' && atk === 'deslocamento') {
      return {
        valid: false,
        message: 'Combinação Inválida: Não é permitido se mover duas vezes usando ações de ataque.'
      };
    }

    return {
      valid: true,
      message: 'Combinação Válida e Taticamente Aprovada pelo Tormenta20!'
    };
  }
}
