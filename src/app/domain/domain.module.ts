import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaDataService } from './services/metadata.service';
import { SplashScreen } from './splash-screen/splash-screen';

@NgModule({
  declarations: [SplashScreen],
  imports: [CommonModule],
  exports: [SplashScreen],
  providers: [MetaDataService],
})
export class DomainModule {}
