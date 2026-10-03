import { Component, PLATFORM_ID, inject, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Header } from '../../header/header';

@Component({
  selector: 'app-campaign-map-inverno',
  standalone: true,
  imports: [Header, RouterLink],
  templateUrl: './campaign-map-inverno.html',
  styleUrl: './campaign-map-inverno.scss'
})
export class CampaignMapInverno {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  zoom: number = 1;
  minZoom: number = 0.6;
  maxZoom: number = 3.5;

  panX: number = 0;
  panY: number = 0;

  isDragging: boolean = false;
  private dragStartX: number = 0;
  private dragStartY: number = 0;
  private startPanX: number = 0;
  private startPanY: number = 0;

  isFullscreen: boolean = false;

  goBack(): void {
    this.router.navigate(['/campanhas/inverno-de-ossos']);
  }

  zoomIn(): void {
    if (this.zoom < this.maxZoom) {
      this.zoom = Math.min(this.maxZoom, Math.round((this.zoom + 0.25) * 100) / 100);
    }
  }

  zoomOut(): void {
    if (this.zoom > this.minZoom) {
      this.zoom = Math.max(this.minZoom, Math.round((this.zoom - 0.25) * 100) / 100);
    }
  }

  resetView(): void {
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  onMouseDown(e: MouseEvent): void {
    if (e.button !== 0) return; // Only primary button
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.startPanX = this.panX;
    this.startPanY = this.panY;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    const deltaX = e.clientX - this.dragStartX;
    const deltaY = e.clientY - this.dragStartY;
    this.panX = this.startPanX + deltaX;
    this.panY = this.startPanY + deltaY;
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  onWheel(e: WheelEvent): void {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.15 : -0.15;
    const newZoom = Math.min(this.maxZoom, Math.max(this.minZoom, this.zoom + zoomFactor));
    this.zoom = Math.round(newZoom * 100) / 100;
  }

  onDoubleClick(): void {
    if (this.zoom > 1.2) {
      this.resetView();
    } else {
      this.zoom = 1.8;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.isFullscreen) {
      this.isFullscreen = false;
    }
  }
}
