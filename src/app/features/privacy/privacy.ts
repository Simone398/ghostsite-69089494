import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-privacy',
  imports: [SectionHeaderComponent],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {}
