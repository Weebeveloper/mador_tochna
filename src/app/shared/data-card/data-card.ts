import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-card',
  templateUrl: './data-card.html',
  styleUrls: ['./data-card.scss'],
})
export class DataCardComponent {
  @Input({ required: true }) cardId!: number;
  @Input({ required: true }) cardName!: string;
  @Input({ required: true }) cardDescription!: string;
}
