import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent),
    data: {
      animation: 'Home',
      seo: {
        title: 'Cibo per animali a due passi da casa',
        description:
          'Negozio locale di cibo per animali con focus su cani. Consulenza personalizzata, prodotti selezionati e servizio vicino a te.',
      },
    },
  },
  {
    path: 'il-negozio',
    loadComponent: () =>
      import('./features/il-negozio/il-negozio').then((m) => m.IlNegozioComponent),
    data: {
      animation: 'IlNegozio',
      seo: {
        title: 'Il negozio di cibo per animali',
        description:
          'Scopri la storia della Bottega del Pet, i nostri valori e il team. Un negozio locale che mette al centro il benessere degli animali.',
      },
    },
  },
  {
    path: 'prodotti',
    loadComponent: () => import('./features/prodotti/prodotti').then((m) => m.ProdottiComponent),
    data: {
      animation: 'Prodotti',
      seo: {
        title: 'Prodotti per cani, gatti, pappagalli e galline',
        description:
          'Categorie principali di prodotti: crocchette, umido, snack e diete specifiche per cani, gatti, pappagalli e galline.',
      },
    },
  },
  {
    path: 'servizi',
    loadComponent: () => import('./features/servizi/servizi').then((m) => m.ServiziComponent),
    data: {
      animation: 'Servizi',
      seo: {
        title: 'Servizi aggiuntivi per clienti locali',
        description:
          'Consegna a domicilio, ordini telefonici e via WhatsApp. Servizi pensati per facilitare i clienti del quartiere.',
      },
    },
  },
  {
    path: 'contatti',
    loadComponent: () => import('./features/contatti/contatti').then((m) => m.ContattiComponent),
    data: {
      animation: 'Contatti',
      seo: {
        title: 'Dove siamo e come contattarci',
        description:
          'Indirizzo, orari di apertura, contatti telefonici e WhatsApp. Vieni a trovarci in negozio.',
      },
    },
  },
  {
    path: 'privacy',
    loadComponent: () => import('./features/privacy/privacy').then((m) => m.PrivacyComponent),
    data: {
      animation: 'Privacy',
      seo: {
        title: 'Privacy policy',
        description: 'Informazioni essenziali sulla privacy e sul trattamento dei dati.',
      },
    },
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFoundComponent),
    data: {
      animation: 'NotFound',
      seo: {
        title: 'Pagina non trovata',
        description:
          'La pagina richiesta non e disponibile. Torna alla home per continuare la navigazione.',
      },
    },
  },
];
