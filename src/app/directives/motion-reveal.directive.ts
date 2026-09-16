import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[motionReveal]',
  standalone: true,
})
export class MotionRevealDirective implements OnDestroy {
  @Input() motionDelay = 0;
  @Input() motionFrom: 'bottom' | 'left' | 'right' | 'top' = 'bottom';
  @Input() motionDuration = 0.55;
  @Input() motionOnce = true;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private stopFn?: () => void;

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;
      this.init();
    });
  }

  private async init() {
    const { animateMini, inView } = await import('motion');

    const el = this.el.nativeElement;

    // Initial hidden state
    const fromX = this.motionFrom === 'left' ? -30 : this.motionFrom === 'right' ? 30 : 0;
    const fromY = this.motionFrom === 'bottom' ? 28 : this.motionFrom === 'top' ? -28 : 0;

    Object.assign(el.style, {
      opacity: '0',
      transform: `translate(${fromX}px, ${fromY}px)`,
      willChange: 'opacity, transform',
    });

    this.stopFn = inView(
      el,
      () => {
        animateMini(
          el,
          { opacity: 1, transform: 'translate(0px, 0px)' },
          {
            duration: this.motionDuration,
            delay: this.motionDelay,
            easing: [0.25, 0.1, 0.25, 1],
          } as any
        );

        if (this.motionOnce) {
          return;
        }

        return () => {
          Object.assign(el.style, {
            opacity: '0',
            transform: `translate(${fromX}px, ${fromY}px)`,
          });
        };
      },
      { margin: '0px 0px -40px 0px', amount: 0.15 }
    );
  }

  ngOnDestroy() {
    this.stopFn?.();
  }
}
