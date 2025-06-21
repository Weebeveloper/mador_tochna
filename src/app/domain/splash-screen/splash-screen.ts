import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.html',
  styleUrls: ['./splash-screen.scss'],
})
export class SplashScreen {
  fill = false;
  drain = false;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    anime({
      targets: ['.wheel'],
      rotate: '3turn',
      duration: 2000,
      easing: 'easeInOutQuad',
      begin: () =>
        setTimeout(() => {
          this.drain = true;
          this._cdr.detectChanges();
        }, 600),
    });
    anime({
      targets: '.right-wheel',
      duration: 5500,
      clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'], // reveal from left to right
      delay: 1700,
    });
    anime({
      targets: '.left-wheel',
      duration: 5500,
      clipPath: ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'], // reveal from right to left
      delay: 1700,
    });
    anime({
      targets: '.tear',
      translateY: '760',
      ease: 'cubicBezier(0.55, 0.055, 0.675, 0.19)',
      duration: 4000,
      delay: 1400,
      opacity: [1, 0],
      begin: () =>
        setTimeout(() => {
          this.fill = true;
          this._cdr.detectChanges();
        }, 1600),
    });
  }
}
