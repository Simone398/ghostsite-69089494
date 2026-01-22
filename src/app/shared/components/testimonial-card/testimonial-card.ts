import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialCardComponent {
  @Input({ required: true }) quote!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) pet!: string;
}
