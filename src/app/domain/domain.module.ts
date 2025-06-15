import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaDataService } from './services/metadata.service';

@NgModule({
  imports: [CommonModule],
  providers: [MetaDataService],
})
export class DomainModule {}
