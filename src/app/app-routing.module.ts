import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingPageComponent } from './pages/testing/testing.page';
import { GuidesPageComponent } from './pages/guides/guides.page';

const routes: Routes = [
  { path: 'guides', component: GuidesPageComponent },
  { path: 'testing', component: TestingPageComponent },
  { path: '', redirectTo: 'guides', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
