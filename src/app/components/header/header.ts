import { Component, Input, ElementRef, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  @Input() title: string = "";

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.removeAttribute('title');
    }
  }
}
