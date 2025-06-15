import { Component } from '@angular/core';
import { MetaDataService } from 'src/app/domain/services/metadata.service';

@Component({
  selector: 'guides-page',
  templateUrl: './guides.page.html',
  styleUrls: ['./guides.page.scss'],
})
export class GuidesPageComponent {
  constructor(readonly metadata: MetaDataService) {}
}
