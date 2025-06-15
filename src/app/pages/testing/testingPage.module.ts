import { NgModule } from '@angular/core';
import { TestingPageComponent } from './testing.page';
import { TestingPageRouting } from './testingPage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TestingPageComponent],
  imports: [CommonModule, TestingPageRouting, SharedModule, MatButtonModule],
})
export class TestingPageModule {}
