import { Component } from '@angular/core';
import { MetaDataService } from 'src/app/domain/services/metadata.service';

@Component({
  selector: 'testing-page',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPageComponent {
  constructor(readonly metadata: MetaDataService) {}
}
