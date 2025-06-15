import { NgModule } from '@angular/core';
import { TestingPageModule } from './testing/testingPage.module';
import { GuidesPageModule } from './guides/guidesPage.module';

@NgModule({
  imports: [TestingPageModule, GuidesPageModule],
  exports: [TestingPageModule, GuidesPageModule],
})
export class PagesModule {}
