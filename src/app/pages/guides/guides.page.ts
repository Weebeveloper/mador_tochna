import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, filter, map, startWith, tap } from 'rxjs';
import { MetaDataService } from 'src/app/domain/services/metadata.service';

@Component({
  selector: 'guides-page',
  templateUrl: './guides.page.html',
  styleUrls: ['./guides.page.scss'],
})
export class GuidesPageComponent {
  filters = new FormGroup({
    search: new FormControl(''),
  });

  readonly dataCards$ = combineLatest([
    this._metadata.dataCards$,
    this.filters.controls.search.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([cards, search]) =>
      cards.filter(
        (card) =>
          card.name.includes(search!) || card.description.includes(search!)
      )
    )
  );

  constructor(private readonly _metadata: MetaDataService) {}
}
