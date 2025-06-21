import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('box', { static: true }) myBox!: ElementRef;

  ngAfterViewInit(): void {
    anime({
      targets: this.myBox.nativeElement,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#00FF00',
      duration: 2000,
    });
  }
}
