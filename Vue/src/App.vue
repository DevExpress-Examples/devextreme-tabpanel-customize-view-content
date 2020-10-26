<template>
  <DxTabPanel>
    <DxItem title="Data Grid" icon="rowfield">
      <template #default>
        <DxDataGrid :data-source="dataSource" :columns="columns" />
      </template>
    </DxItem>

    <DxItem title="Chart" icon="chart">
      <template #default>
        <DxChart
          :data-source="populationData"
          title="World Population by Decade"
        >
          <DxSeries type="bar" />
        </DxChart>
      </template>
    </DxItem>

    <DxItem title="Form" icon="floppy">
      <template #default>
        <DxForm :col-count="2" :form-data="employee">
          <DxSimpleItem
            :editor-options="nameEditorOptions"
            data-field="FirstName"
          />
          <DxSimpleItem
            :editor-options="positionEditorOptions"
            data-field="Position"
            editor-type="dxSelectBox"
          >
            <DxRequiredRule message="Position is required." />
          </DxSimpleItem>
          <DxSimpleItem
            :editor-options="nameEditorOptions"
            data-field="LastName"
          />
          <DxSimpleItem
            :editor-options="hireDateEditorOptions"
            data-field="HireDate"
            editor-type="dxDateBox"
          >
            <DxRequiredRule message="Hire Date is required." />
          </DxSimpleItem>
          <DxSimpleItem
            :editor-options="birthDateEditorOptions"
            data-field="BirthDate"
            editor-type="dxDateBox"
          />
          <DxSimpleItem data-field="Address" />
          <DxSimpleItem
            :col-span="2"
            :editor-options="notesEditorOptions"
            data-field="Notes"
            editor-type="dxTextArea"
          />
          <DxSimpleItem
            :editor-options="phoneEditorOptions"
            data-field="Phone"
          />
          <DxSimpleItem data-field="Email" />
        </DxForm>
      </template>
    </DxItem>

    <DxItem title="Scheduler" icon="event" badge="1">
      <template #default>
        <DxScheduler
          :data-source="schedulerDataSource"
          :current-date="currentDate"
          :views="views"
          :height="600"
          :start-day-hour="9"
          current-view="week"
        />
      </template>
    </DxItem>
  </DxTabPanel>
</template>
<script>
import DxTabPanel, { DxItem } from "devextreme-vue/tab-panel";
import DxDataGrid from "devextreme-vue/data-grid";
import DxChart, { DxSeries } from "devextreme-vue/chart";
import DxForm, { DxSimpleItem, DxRequiredRule } from "devextreme-vue/form";
import DxScheduler from "devextreme-vue/scheduler";

import service from "./data.js";
import "devextreme-vue/text-area";

export default {
  components: {
    DxTabPanel,
    DxItem,
    DxDataGrid,
    DxChart,
    DxSeries,
    DxForm,
    DxSimpleItem,
    DxRequiredRule,
    DxScheduler,
  },
  data() {
    const employee = service.getEmployee();
    const positions = service.getPositions();
    const populationData = service.getPopulationData();
    return {
      dataSource: service.getCustomers(),
      columns: ["CompanyName", "City", "State", "Phone", "Fax"],
      populationData,
      employee,
      positions,
      views: ["week", "month"],
      currentDate: new Date(2017, 4, 25),
      schedulerDataSource: service.getData(),
      nameEditorOptions: { disabled: true },
      positionEditorOptions: {
        value: "",
        searchEnabled: true,
        items: positions,
      },
      hireDateEditorOptions: { value: null, width: "100%" },
      birthDateEditorOptions: { disabled: true, width: "100%" },
      notesEditorOptions: { height: 90 },
      phoneEditorOptions: {
        mask: "+1 (X00) 000-0000",
        maskRules: { X: /[02-9]/ },
      },
    };
  },
};
</script>
<style>
.dx-multiview-item-container {
  padding: 10px;
}
</style>