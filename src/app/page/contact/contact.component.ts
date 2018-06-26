import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss',]
  
})
export class ContactComponent implements OnInit {

  async ngAfterViewInit() {
    await this.loadScript('assets/highslide/highslide-with-gallery.js');
    await this.loadScript('assets/js/bootstrap-filestyle.min.js');
    await this.loadScript('assets/js/customs.js');
    
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

}
