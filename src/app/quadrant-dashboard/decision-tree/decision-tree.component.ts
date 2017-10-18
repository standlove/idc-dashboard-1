import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { rankData } from './rankData';
import { ruleData } from './ruleData';

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {
  @Output()openModal = new EventEmitter<string>();

  activeTab = 'rank';
  rankData = rankData;
  ruleData = ruleData;
  loadingIndicator = false;

    constructor() { }

  ngOnInit() {
  }

  changeTab(string) {
    this.activeTab = string;
  }

  getRowHeight(row) {
    const ruleCount = row.rules.length;
    const height = 25 * ruleCount + 20;
    return height;
  }

  onPage(event) {

  }

  openChartModal(chartRef) {
    this.openModal.emit(chartRef);
  }

}
