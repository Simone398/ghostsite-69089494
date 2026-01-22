import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { STORE_INFO } from '../../core/utils/site-data';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form';
import { CtaStripComponent } from '../../shared/components/cta-strip/cta-strip';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-contatti',
  imports: [SectionHeaderComponent, ContactFormComponent, CtaStripComponent],
  templateUrl: './contatti.html',
  styleUrl: './contatti.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContattiComponent {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly storeInfo = STORE_INFO;
  protected readonly safeMapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    STORE_INFO.mapEmbedUrl,
  );
}
