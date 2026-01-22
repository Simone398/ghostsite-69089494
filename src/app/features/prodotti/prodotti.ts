import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProductCategory } from '../../core/models/content.models';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-prodotti',
  imports: [RouterLink, SectionHeaderComponent, ProductCardComponent],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProdottiComponent {
  protected readonly categories: ProductCategory[] = [
    {
      id: 'cani',
      title: 'Cibo per cani',
      description: 'Secco, umido e snack selezionati per ogni taglia, eta e sensibilita.',
      highlights: [
        {
          title: 'Crocchette premium',
          description: 'Formule bilanciate con proteine di qualita.',
          icon: 'KROC',
          benefits: ['Linee per cuccioli e adulti', 'Formati per taglie diverse'],
        },
        {
          title: 'Cibo umido',
          description: 'Ricette appetibili per variare la dieta.',
          icon: 'UMI',
          benefits: ['Monoproteico', 'Supporto digestivo'],
        },
        {
          title: 'Snack e premietti',
          description: 'Snack funzionali e naturali per il training.',
          icon: 'SNK',
          benefits: ['Bocconi soft', 'Senza zuccheri aggiunti'],
        },
        {
          title: 'Diete specifiche',
          description: 'Soluzioni per intolleranze, sovrappeso e pelli sensibili.',
          icon: 'DIET',
          benefits: ['Ipoallergenico', 'Supporto articolare'],
        },
      ],
    },
    {
      id: 'gatti',
      title: 'Cibo per gatti',
      description: 'Selezione completa per gatti sterilizzati, indoor e con esigenze specifiche.',
      highlights: [
        {
          title: 'Secco e umido',
          description: 'Alimenti completi con gusto e apporto equilibrato.',
          icon: 'SECC',
          benefits: ['Ricette bilanciate', 'Formato pratico'],
        },
        {
          title: 'Snack funzionali',
          description: 'Premietti per igiene orale e supporto pelo.',
          icon: 'SNK',
          benefits: ['Formule anti-bolo', 'Supporto digestivo'],
        },
        {
          title: 'Esigenze specifiche',
          description: 'Linee per gatti sterilizzati e sensibili.',
          icon: 'SPEC',
          benefits: ['Indoor', 'Sterilizzati'],
        },
      ],
    },
    {
      id: 'pappagalli',
      title: 'Pappagalli',
      description: 'Mix di semi, pellet e integrazioni per uccelli di tutte le taglie.',
      highlights: [
        {
          title: 'Mix e semi selezionati',
          description: 'Composizioni bilanciate con semi di qualita.',
          icon: 'MIX',
          benefits: ['Miscela varia', 'Adatta alle specie piu comuni'],
        },
        {
          title: 'Pellet nutrizionali',
          description: 'Supporto completo per una dieta equilibrata.',
          icon: 'PEL',
          benefits: ['Alto contenuto nutrizionale', 'Formato pratico'],
        },
        {
          title: 'Snack e integratori',
          description: 'Barrette e integrazioni per la vitalita.',
          icon: 'INT',
          benefits: ['Vitamine essenziali', 'Ingredienti naturali'],
        },
      ],
    },
    {
      id: 'galline',
      title: 'Galline',
      description: 'Mangimi completi, granaglie e integratori per allevamenti domestici.',
      highlights: [
        {
          title: 'Mangimi completi',
          description: 'Formule bilanciate per una crescita sana.',
          icon: 'MANG',
          benefits: ['Supporto alla deposizione', 'Ingredienti controllati'],
        },
        {
          title: 'Granaglie e cereali',
          description: 'Mix naturali per un apporto energetico corretto.',
          icon: 'GRA',
          benefits: ['Mais e frumento', 'Miscele pronte'],
        },
        {
          title: 'Integrazioni minerali',
          description: 'Calcio e vitamine per ossa robuste.',
          icon: 'MIN',
          benefits: ['Supporto guscio', 'Facile da somministrare'],
        },
      ],
    },
  ];

  protected readonly navItems = [
    { label: 'Cani', fragment: 'cani' },
    { label: 'Gatti', fragment: 'gatti' },
    { label: 'Pappagalli', fragment: 'pappagalli' },
    { label: 'Galline', fragment: 'galline' },
  ];
}
