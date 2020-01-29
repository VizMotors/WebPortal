import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-flash-page',
  templateUrl: './flash-page.component.html',
  styleUrls: ['./flash-page.component.scss']
})
export class FlashPageComponent implements OnInit {
  private img1: SafeStyle;
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.img1 = this.sanitizer.bypassSecurityTrustStyle('url(./assets/images/' + Number(this.getRandomArbitrary(1, 5)).toFixed(0) + '.jpg)');
  }, 5000);

  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  

}

