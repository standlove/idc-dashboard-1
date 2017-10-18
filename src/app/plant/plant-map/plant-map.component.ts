import { Component, OnInit } from '@angular/core';
import { mapStyles } from './map.style';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PlantSidebarService } from '../plant-sidebar/plant-sidebar.service';

@Component({
  selector: 'app-plant-map',
  templateUrl: './plant-map.component.html',
  styleUrls: ['./plant-map.component.scss']
})
export class PlantMapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  plants;
  host = environment.serverHost;
  styles = mapStyles;
  sliderValue: number;

  constructor(private http: HttpClient, private plantSidebarService: PlantSidebarService) { }

  ngOnInit() {
    this.lat = 40;
    this.lng = -40;
    this.zoom = 4;
    // Makes a call to the mock api to get an array of plants
    this.http.get(this.host + 'plants').subscribe(
      plants => {this.plants = plants; },
      error => {console.log(error); }
    );
  }

  zoomChanged(src) {
    console.log(src);
    this.zoom = src.value;
  }

  productClicked(productId) {
    this.plantSidebarService.openPlantSidebar(productId);
  }

}
