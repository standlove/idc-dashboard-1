import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-alerts-notifications',
  templateUrl: './alerts-notifications.component.html',
  styleUrls: ['./alerts-notifications.component.scss']
})
export class AlertsNotificationsComponent implements OnInit {
  @Output()openModal = new EventEmitter<string>();
  loadingIndicator = false;
  data = data;
    constructor() { }

  ngOnInit() {
  }

  getRowHeight(row) {
    const ruleCount = row.observations.length;
    const height = 15 * ruleCount + 70;
    return height;
  }

  onPage(event) {

  }

  openMessageModal(rowInfo) {
    this.openModal.emit(rowInfo);
  }
}
