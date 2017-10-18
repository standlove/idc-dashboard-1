import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../shared/shared.module';
import { QuadrantDashboardRoutingModule } from './quadrant-dashboard-routing.module';

import { QuadrantDashboardComponent } from './quadrant-dashboard.component';
import { AlertsNotificationsComponent } from './alerts-notifications/alerts-notifications.component';
import { ProcessMiningComponent } from './process-mining/process-mining.component';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';
import { MiqViewComponent } from './miq-view/miq-view.component';
import { ExpandableWidgetComponent } from './expandable-widget/expandable-widget.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ChartModalComponent } from './chart-modal/chart-modal.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxChartsModule,
    QuadrantDashboardRoutingModule,
    SharedModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    QuadrantDashboardComponent,
    AlertsNotificationsComponent,
    ProcessMiningComponent,
    DecisionTreeComponent,
    MiqViewComponent,
    ExpandableWidgetComponent,
    MessageModalComponent,
    ChartModalComponent
  ],
  entryComponents: [
    ChartModalComponent,
    MessageModalComponent
  ]
})
export class QuadrantDashboardModule { }
