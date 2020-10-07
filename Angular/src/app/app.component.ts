import { Component } from '@angular/core';

import { Customer, Population, Employee, Appointment, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
      this.customers =  service.getCustomers();
      this.populationData = service.getPopulationData();
      this.employee = service.getEmployee();
      this.positions = service.getPositions();
      this.rules = { 'X': /[02-9]/ };
      this.appointmentsData = service.getAppointments();
  }
}