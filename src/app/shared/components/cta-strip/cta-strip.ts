import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-strip',
  imports: [RouterLink],
  templateUrl: './cta-strip.html',
  styleUrl: './cta-strip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaStripComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) buttonLabel!: string;
  @Input() buttonLink = '/contatti';
  @Input() buttonExternal = false;
}
