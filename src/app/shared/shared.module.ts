import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCardComponent } from './data-card/data-card';

@NgModule({
  declarations: [DataCardComponent],
  imports: [CommonModule],
  exports: [DataCardComponent],
})
export class SharedModule {}
