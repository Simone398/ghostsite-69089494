import { OpeningHour } from '../models/content.models';

const openingHours: OpeningHour[] = [
  { day: 'Lunedi', hours: '09:00 - 12:30, 15:30 - 19:30' },
  { day: 'Martedi', hours: '09:00 - 12:30, 15:30 - 19:30' },
  { day: 'Mercoledi', hours: '09:00 - 12:30, 15:30 - 19:30' },
  { day: 'Giovedi', hours: '09:00 - 12:30, 15:30 - 19:30' },
  { day: 'Venerdi', hours: '09:00 - 12:30, 15:30 - 19:30' },
  { day: 'Sabato', hours: '09:00 - 13:00' },
  { day: 'Domenica', hours: 'Chiuso' },
];

const whatsappMessage =
  'Ciao, vorrei informazioni sui prodotti per cani e sugli orari del negozio.';

export const STORE_INFO = {
  name: 'Bottega del Pet',
  tagline: 'Cibo di qualita e consigli su misura',
  address: 'Via Roma 25, 40121 Bologna (BO)',
  phone: '+39 051 123 456',
  phoneHref: 'tel:+39051123456',
  whatsappNumber: '39051123456',
  whatsappMessage,
  whatsappLink: `https://wa.me/39051123456?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'info@bottegadelpet.it',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Via%20Roma%2025%20Bologna%20Italia&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://maps.google.com/?q=Via%20Roma%2025%20Bologna%20Italia',
  openingHours,
  openingHoursSchema: ['Mo-Fr 09:00-12:30, 15:30-19:30', 'Sa 09:00-13:00'],
};
