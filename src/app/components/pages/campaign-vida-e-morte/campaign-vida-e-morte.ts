import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../header/header';

@Component({
  selector: 'app-campaign-vida-e-morte',
  standalone: true,
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './campaign-vida-e-morte.html',
  styleUrl: './campaign-vida-e-morte.scss'
})
export class CampaignVidaEMorte {}
