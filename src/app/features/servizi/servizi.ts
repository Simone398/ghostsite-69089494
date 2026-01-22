import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ServiceItem } from '../../core/models/content.models';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card';

@Component({
  selector: 'app-servizi',
  imports: [SectionHeaderComponent, ServiceCardComponent],
  templateUrl: './servizi.html',
  styleUrl: './servizi.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiziComponent {
  protected readonly services: ServiceItem[] = [
    {
      id: 'consegna',
      title: 'Consegna a domicilio locale',
      description: 'Servizio disponibile per i clienti nelle zone vicine al negozio.',
      benefit: 'Comodo se hai poco tempo.',
      icon: 'DEL',
      status: 'attivo',
      details: [
        'Richiesta via telefono o WhatsApp',
        'Orari concordati in giornata',
        'Ordine minimo in base alla zona',
      ],
    },
    {
      id: 'telefono',
      title: 'Ordini telefonici',
      description: 'Chiama e prepariamo il tuo ordine per un ritiro veloce.',
      benefit: 'Riduci i tempi di attesa.',
      icon: 'TEL',
      status: 'attivo',
      details: ['Dal lunedi al sabato', 'Conferma disponibilita immediata'],
    },
    {
      id: 'whatsapp',
      title: 'Ordini via WhatsApp',
      description: 'Invia un messaggio con i prodotti che ti servono.',
      benefit: 'Perfetto per chi preferisce scrivere.',
      icon: 'WA',
      status: 'attivo',
      details: ['Risposta rapida', 'Consigli sui prodotti'],
    },
    {
      id: 'prenotazioni',
      title: 'Prenotazione prodotti da ritirare',
      description: 'Blocca i prodotti piu richiesti e passa in negozio quando vuoi.',
      benefit: 'Mai piu scaffali vuoti.',
      icon: 'PREN',
      status: 'in-arrivo',
      details: ['In arrivo nelle prossime settimane'],
    },
  ];
}
