import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationHistoryService {
  private router = inject(Router);
  private location = inject(Location);
  private readonly platformId = inject(PLATFORM_ID);
  private history: string[] = [];

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects;
        if (this.history.length === 0 || this.history[this.history.length - 1] !== url) {
          this.history.push(url);
        }
      });
  }

  goBack(fallbackUrl: string = '/'): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.history.length > 1) {
        this.history.pop();
        this.location.back();
        return;
      }
      if (window.history.length > 1) {
        this.location.back();
        return;
      }
    }
    this.router.navigateByUrl(fallbackUrl);
  }
}
