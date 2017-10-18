import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plants;
  loadingIndicator = true;
  host = environment.serverHost;
  columns = [
    {name : 'Plant Name', prop: 'name'},
    {name : 'Region'},
    {name : 'Yield', prop: 'yieldAverage'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Makes a call to the mock api to get an array of plants
    this.http.get(this.host + 'plants').subscribe(
      plants => {
        this.plants = plants;
        this.loadingIndicator = false;
      },
      error => {console.log(error); }
    );
  }

}
