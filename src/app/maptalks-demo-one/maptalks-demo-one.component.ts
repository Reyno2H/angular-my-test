import { Component, OnInit } from '@angular/core';

 // @ts-ignore
import * as maptalks from 'maptalks';
//plugin's classes should be imported directly like
 // @ts-ignore
import { ThreeLayer } from 'maptalks.three';

@Component({
  selector: 'app-maptalks-demo-one',
  templateUrl: './maptalks-demo-one.component.html',
  styleUrls: ['./maptalks-demo-one.component.css']
})
export class MaptalksDemoOneComponent implements OnInit {

  map
  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = new maptalks.Map('map-one', {
        center: [-98.4181, 21.1437],
        zoom: 13,
        zoomControl : true,
        baseLayer: new maptalks.TileLayer('base', {
          urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a','b','c','d'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      });
  }

}