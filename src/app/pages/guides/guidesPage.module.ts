import { NgModule } from '@angular/core';
import { GuidesPageComponent } from './guides.page';
import { TestingPageRouting } from './guidesPage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [GuidesPageComponent],
  imports: [CommonModule, TestingPageRouting, SharedModule],
})
export class GuidesPageModule {}
