import { Component } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public static readonly SPLASH_SCREEN_DURATION = 3200;
  readonly splashScreen$: Observable<boolean> = of(false).pipe(
    delay(AppComponent.SPLASH_SCREEN_DURATION),
    map(() => true)
  );
}
