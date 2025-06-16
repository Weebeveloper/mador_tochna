import { NgModule } from '@angular/core';
import { GuidesPageComponent } from './guides.page';
import { TestingPageRouting } from './guidesPage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GuidesPageComponent],
  imports: [
    CommonModule,
    TestingPageRouting,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class GuidesPageModule {}
