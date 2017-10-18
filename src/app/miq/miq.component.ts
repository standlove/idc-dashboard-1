import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-miq',
  templateUrl: './miq.component.html',
  styleUrls: ['./miq.component.scss']
})
export class MiqComponent implements OnInit {
  activeTab = 'daily';
  activeChart = 'lineChart';
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  colorScheme = {
    domain: ['#4e89f7']
  };
  host = environment.serverHost;
  batchNumber: number;
  lineData = [
    {
      name : 'Batch' + this.batchNumber,
      series : []
    }
  ];
  barData = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getYieldData('daily');
    this.batchNumber = parseFloat(this.route.snapshot.paramMap.get('batchId'));
    this.lineData[0].name = 'Batch ' + this.batchNumber;
  }

  getYieldData(timeFrame) {
    this.http.get(this.host + 'product/3948/batch/' + this.batchNumber + '/' + timeFrame).subscribe(
      chartData => { this.parseChartData(chartData); },
      error => {console.log(error); }
    );
  }

  parseChartData(chartData) {
    this.lineData[0].series = [];
    this.barData = [];
    for (const entry of chartData){
      const graphPoint = {
        name : moment(entry.date, 'MM-DD-YYYY').format('MMMM D'),
        value: entry.yield
      };

      this.lineData[0].series.push(graphPoint);
    }
    this.lineData = [...this.lineData];
    this.barData = [...this.lineData[0].series];
  }

  changeTab(tab) {
    if (this.activeTab === tab) {
      return;
    }else {
      this.activeTab = tab;
      this.getYieldData(tab);
    }
  }

  chartChange(chart) {
    this.activeChart = chart;
  }

  moveQuadView(event) {
    console.log(event);
    this.router.navigate(['/quadrant-dashboard', this.batchNumber]);
  }
}
