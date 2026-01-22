import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavItem } from '../../models/content.models';
import { STORE_INFO } from '../../utils/site-data';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly storeInfo = STORE_INFO;
  protected readonly year = new Date().getFullYear();
  protected readonly navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Il negozio', path: '/il-negozio' },
    { label: 'Prodotti', path: '/prodotti' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Contatti', path: '/contatti' },
  ];
}
