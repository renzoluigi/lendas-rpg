import { Component, Input, ElementRef, OnInit, afterNextRender, PLATFORM_ID, inject } from '@angular/core';
import { NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  @Input() title: string = ""

  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.el.nativeElement.removeAttribute('title');
    }
  }
}
