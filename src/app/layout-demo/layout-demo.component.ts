import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-demo',
  templateUrl: './layout-demo.component.html',
  styleUrls: ['./layout-demo.component.css']
})
export class LayoutDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onresize = () => {
      let card3 = <HTMLDivElement>document.getElementById("card3")
      let mult = card3.clientWidth % 5
      if (mult == 0) {
        console.clear();
        console.log("width: " + document.body.clientWidth);
      }
    }
  }

}