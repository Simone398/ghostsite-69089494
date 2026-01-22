import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ServiceItem, Testimonial } from '../../core/models/content.models';
import { STORE_INFO } from '../../core/utils/site-data';
import { CtaStripComponent } from '../../shared/components/cta-strip/cta-strip';
import { InfoCardComponent } from '../../shared/components/info-card/info-card';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    SectionHeaderComponent,
    InfoCardComponent,
    ProductCardComponent,
    ServiceCardComponent,
    TestimonialCardComponent,
    CtaStripComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly storeInfo = STORE_INFO;
  protected readonly heroImages = {
    large: 'assets/images/home/hero-dog-1600.jpg',
    small: 'assets/images/home/hero-dog-900.jpg',
    alt: 'Cane che mangia crocchette in una ciotola',
  };

  protected readonly benefits = [
    {
      icon: 'Q',
      title: 'Qualita selezionata',
      description: 'Solo marchi affidabili e ingredienti bilanciati per ogni esigenza.',
    },
    {
      icon: 'CONS',
      title: 'Consulenza personalizzata',
      description: 'Ti aiutiamo a scegliere il cibo piu adatto a taglia, eta e stile di vita.',
    },
    {
      icon: 'LOC',
      title: 'Vicini a te',
      description: 'Negozio locale comodo da raggiungere, con servizio amichevole e rapido.',
    },
    {
      icon: 'CARE',
      title: 'Benessere prima di tutto',
      description: 'Ascoltiamo i tuoi bisogni e quelli del tuo animale con attenzione.',
    },
  ];

  protected readonly productHighlights = [
    {
      icon: 'DOG',
      title: 'Cibo per cani',
      description: 'Crocchette premium, umido, snack e diete specifiche per ogni fase.',
      benefits: ['Cuccioli, adulti, senior', 'Ipoallergenico e grain free'],
      fragment: 'cani',
    },
    {
      icon: 'CAT',
      title: 'Cibo per gatti',
      description: 'Selezione mirata per gatti sterilizzati, indoor e attivi.',
      benefits: ['Secco e umido', 'Snack funzionali'],
      fragment: 'gatti',
    },
    {
      icon: 'BIRD',
      title: 'Pappagalli',
      description: 'Mix, pellet e integrazioni per il benessere quotidiano.',
      benefits: ['Semi selezionati', 'Snack naturali'],
      fragment: 'pappagalli',
    },
    {
      icon: 'HEN',
      title: 'Galline',
      description: 'Mangimi completi e granaglie per un allevamento sano.',
      benefits: ['Formule bilanciate', 'Integrazioni minerali'],
      fragment: 'galline',
    },
  ];

  protected readonly services: ServiceItem[] = [
    {
      id: 'consegna',
      title: 'Consegna a domicilio locale',
      description: 'Consegniamo nelle zone vicine per ordini telefonici o WhatsApp.',
      benefit: 'Perfetto se hai poco tempo.',
      icon: 'DEL',
      status: 'attivo',
      details: ['Zone limitrofe al negozio', 'Orari concordati al telefono'],
    },
    {
      id: 'ordini',
      title: 'Ordini telefonici e WhatsApp',
      description: 'Prenota i prodotti e passa a ritirarli quando preferisci.',
      benefit: 'Risparmi tempo e trovi tutto pronto.',
      icon: 'MSG',
      status: 'attivo',
      details: ['Conferma disponibilita in giornata', 'Consigli su misura'],
    },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      name: 'Laura',
      pet: 'Luna, cane',
      quote: 'Sempre gentili e competenti. Hanno trovato il cibo perfetto per la mia cagnolina.',
    },
    {
      name: 'Marco',
      pet: 'Milo, gatto',
      quote: 'Ottima selezione di umido e snack. Mi hanno consigliato con pazienza.',
    },
    {
      name: 'Sara',
      pet: 'Coco, pappagallo',
      quote: 'Finalmente un negozio che ha mix e pellet di qualita per gli uccelli.',
    },
  ];
}
