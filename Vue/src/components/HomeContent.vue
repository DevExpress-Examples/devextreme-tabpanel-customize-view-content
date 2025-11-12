<script setup lang="ts">

import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';
import DxDataGrid from 'devextreme-vue/data-grid';
import DxChart, { DxSeries } from 'devextreme-vue/chart';
import DxForm, { DxSimpleItem, DxRequiredRule } from 'devextreme-vue/form';
import DxScheduler, { type DxSchedulerTypes } from 'devextreme-vue/scheduler';
import service, { type Employee, type Customer, type Appointment, type Population } from '../data';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];
const currentDate = new Date(2017, 4, 25);
const views: DxSchedulerTypes.ViewType[] = ['week', 'month'];

const employee: Employee = service.getEmployee();
const positions: string[] = service.getPositions();
const customers: Customer[] = service.getCustomers();
const appointments: Appointment[] = service.getAppointments();
const populationData: Population[] = service.getPopulationData();
const rules = { X: /[02-9]/ };

const editorOptions = {
  FirstName: { disabled: true },
  Position: {
    items: positions,
    searchEnabled: true,
    value: '',
  },
  LastName: { disabled: true },
  HireDate: { width: '100%', value: null },
  BirthDate: { width: '100%', disabled: true },
  Notes: { height: 90 },
  Phone: {
    mask: '+1 (X00) 000-0000',
    maskRules: rules,
  },
};
</script>
<template>
  <div class="default-style">
    <DxTabPanel :width="800">
      <DxItem
        title="Data Grid"
        icon="rowfield"
      >
        <template #default>
          <DxDataGrid
            :data-source="customers"
            :columns="columns"
          />
        </template>
      </DxItem>

      <DxItem
        title="Chart"
        icon="chart"
      >
        <template #default>
          <DxChart
            :data-source="populationData"
            title="World Population by Decade"
          >
            <DxSeries type="bar"/>
          </DxChart>
        </template>
      </DxItem>

      <DxItem
        title="Form"
        icon="floppy"
      >
        <template #default>
          <DxForm
            :col-count="2"
            :form-data="employee"
          >
            <DxSimpleItem
              :editor-options="editorOptions.FirstName"
              data-field="FirstName"
            />
            <DxSimpleItem
              :editor-options="editorOptions.Position"
              data-field="Position"
              editor-type="dxSelectBox"
            >
              <DxRequiredRule message="Position is required."/>
            </DxSimpleItem>
            <DxSimpleItem
              :editor-options="editorOptions.LastName"
              data-field="LastName"
            />
            <DxSimpleItem
              :editor-options="editorOptions.HireDate"
              data-field="HireDate"
              editor-type="dxDateBox"
            >
              <DxRequiredRule message="Hire Date is required."/>
            </DxSimpleItem>
            <DxSimpleItem
              :editor-options="editorOptions.BirthDate"
              data-field="BirthDate"
              editor-type="dxDateBox"
            />
            <DxSimpleItem data-field="Address"/>
            <DxSimpleItem
              :col-span="2"
              :editor-options="editorOptions.Notes"
              data-field="Notes"
              editor-type="dxTextArea"
            />
            <DxSimpleItem
              :editor-options="editorOptions.Phone"
              data-field="Phone"
            />
            <DxSimpleItem data-field="Email"/>
          </DxForm>
        </template>
      </DxItem>

      <DxItem
        title="Scheduler"
        icon="event"
        badge="1"
      >
        <template #default>
          <DxScheduler
            :data-source="appointments"
            :current-date="currentDate"
            :views="views"
            :height="600"
            :start-day-hour="9"
            current-view="week"
          />
        </template>
      </DxItem>
    </DxTabPanel>
  </div>
</template>
<style scoped>
  .default-style {
    margin: 50px;
    width: 90vw;
  }

  .dx-multiview-item-container {
      padding: 10px;
  }
</style>
