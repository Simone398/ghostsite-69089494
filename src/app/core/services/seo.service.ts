import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { STORE_INFO } from '../utils/site-data';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  /**
   * Aggiorna titolo e meta tag principali per la route attiva.
   */
  updateSeo(data: SeoData): void {
    const fullTitle = `${data.title} | ${STORE_INFO.name}`;
    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });

    const keywords =
      data.keywords ??
      'negozio di cibo per animali, cibo per cani, cibo per gatti, alimentazione pet';
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }

  /**
   * Inietta i dati strutturati LocalBusiness per SEO locale.
   */
  setJsonLd(): void {
    const scriptId = 'local-business-jsonld';
    const existingScript = this.document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'PetStore',
      name: STORE_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Roma 25',
        addressLocality: 'Bologna',
        postalCode: '40121',
        addressRegion: 'BO',
        addressCountry: 'IT',
      },
      telephone: STORE_INFO.phone,
      openingHours: STORE_INFO.openingHoursSchema,
      url: this.document.location.origin,
    };

    const script = this.document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }
}
