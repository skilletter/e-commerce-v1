import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  async ngAfterViewInit() {
    await this.loadScript('assets/engine1/jquery.js');
    await this.loadScript('assets/engine1/wowslider.js');
    await this.loadScript('assets/engine1/script.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }


  constructor() { }

  ngOnInit() {
  }


  //   $(document).ready(function () {
  //     $("#button").click(function () {
  //       alert('ok');
  //     });
  //   });


}
