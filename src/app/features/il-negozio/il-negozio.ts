import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { GalleryImage, TeamMember } from '../../core/models/content.models';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-il-negozio',
  imports: [SectionHeaderComponent],
  templateUrl: './il-negozio.html',
  styleUrl: './il-negozio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('lightboxFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('220ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('180ms ease-in', style({ opacity: 0 }))]),
    ]),
  ],
})
export class IlNegozioComponent {
  protected readonly galleryImages: GalleryImage[] = [
    {
      src: 'assets/images/il-negozio/negozio-esterno.jpg',
      alt: 'Vetrina del negozio con insegna',
    },
    {
      src: 'assets/images/il-negozio/negozio-interno.jpg',
      alt: 'Interno del negozio con scaffali di prodotti',
    },
    {
      src: 'assets/images/il-negozio/negozio-corsoia.jpg',
      alt: 'Corsia con sacchi di crocchette e accessori',
    },
    {
      src: 'assets/images/il-negozio/negozio-consulenza.jpg',
      alt: 'Consulenza al cliente davanti allo scaffale',
    },
  ];

  protected readonly approachPoints = [
    'Selezione di qualita con ingredienti controllati',
    'Consigli personalizzati per ogni animale',
    'Prodotti per esigenze specifiche e stagionali',
    'Supporto post-acquisto per dubbi o cambi alimentari',
  ];

  protected readonly audience = [
    'Famiglie con cani di tutte le taglie',
    'Proprietari di gatti indoor e outdoor',
    'Appassionati di uccelli e pappagalli',
    'Chi alleva galline in modo responsabile',
  ];

  protected readonly team: TeamMember[] = [
    {
      name: 'Chiara B.',
      role: 'Fondatrice e consulente',
      bio: 'Seleziona i prodotti e guida i clienti nelle scelte alimentari.',
    },
    {
      name: 'Luca R.',
      role: 'Consulente alimentare',
      bio: 'Specializzato in diete specifiche per cani e gatti.',
    },
    {
      name: 'Marta G.',
      role: 'Addetta alle vendite',
      bio: 'Accoglienza clienti e gestione ordini telefonici e WhatsApp.',
    },
  ];

  protected readonly selectedImage = signal<GalleryImage | null>(null);

  protected openLightbox(image: GalleryImage): void {
    this.selectedImage.set(image);
  }

  protected closeLightbox(): void {
    this.selectedImage.set(null);
  }

  protected onLightboxClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeLightbox();
    }
  }
}
