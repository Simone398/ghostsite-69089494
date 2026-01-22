import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { routeAnimations } from './core/animations/route-animations';
import { SiteFooterComponent } from './core/components/site-footer/site-footer';
import { SiteHeaderComponent } from './core/components/site-header/site-header';
import { SeoData, SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly reducedMotion = signal(false);

  @ViewChild('mainContent') private readonly mainContent?: ElementRef<HTMLElement>;

  constructor() {
    this.seoService.setJsonLd();
    this.setupReducedMotionListener();

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        const activeRoute = this.getDeepestChild(this.route);
        const seo = activeRoute.snapshot.data['seo'] as SeoData | undefined;
        if (seo) {
          this.seoService.updateSeo(seo);
        }
        queueMicrotask(() => this.mainContent?.nativeElement.focus());
      });
  }

  ngAfterViewInit(): void {
    this.mainContent?.nativeElement.setAttribute('tabindex', '-1');
  }

  prepareRoute(outlet: RouterOutlet): string | undefined {
    return outlet?.activatedRouteData?.['animation'] as string | undefined;
  }

  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }

  private setupReducedMotionListener(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (event: MediaQueryListEvent) => {
      this.reducedMotion.set(event.matches);
    };

    this.reducedMotion.set(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', handler));
    } else {
      mediaQuery.addListener(handler);
      this.destroyRef.onDestroy(() => mediaQuery.removeListener(handler));
    }
  }
}
