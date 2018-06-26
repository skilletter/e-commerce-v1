import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  list = [];
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.list.push({ num: i });
    }
  }
  ngOnInit() {
  }

}
