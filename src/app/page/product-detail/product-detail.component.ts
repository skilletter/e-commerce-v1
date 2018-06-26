import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  async ngAfterViewInit() {
    await this.loadScript('assets/js/magiczoomplus.js');
    await this.loadScript('assets/js/number.js');
    await this.loadScript('assets/js/customs-owl.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }
  list = [];
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.list.push({ num: i });
    }
  }

  ngOnInit() {
  }

}
