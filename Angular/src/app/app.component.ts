import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  DxChartModule,
  DxDataGridModule,
  DxFormModule,
  DxSchedulerModule,
  DxTabPanelModule,
} from 'devextreme-angular';
import {
  Customer,
  Population,
  Employee,
  Appointment,
  Service,
} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [DxTabPanelModule, DxDataGridModule, DxChartModule, DxSchedulerModule, DxFormModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [Service],
})
export class AppComponent {
  customers: Customer[];

  populationData: Population[];

  employee: Employee;

  positions: string[];

  rules: Object;

  appointmentsData: Appointment[];

  currentDate: Date = new Date(2017, 4, 25);

  constructor(service: Service) {
    this.customers = service.getCustomers();
    this.populationData = service.getPopulationData();
    this.employee = service.getEmployee();
    this.positions = service.getPositions();
    this.rules = { X: /[02-9]/ };
    this.appointmentsData = service.getAppointments();
  }
}
