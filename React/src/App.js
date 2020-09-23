import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import "devextreme-react/text-area";

import TabPanel, { Item } from "devextreme-react/tab-panel";
import DataGrid from "devextreme-react/data-grid";
import Chart, { Series } from "devextreme-react/chart";
import Form, { SimpleItem, RequiredRule } from "devextreme-react/form";
import Scheduler from "devextreme-react/scheduler";

import service from "./data.js";

const columns = ["CompanyName", "City", "State", "Phone", "Fax"];
const currentDate = new Date(2017, 4, 25);
const views = ["week", "month"];

const employee = service.getEmployee();
const positions = service.getPositions();
const customers = service.getCustomers();
const data = service.getSchedulerData();
const populationData = service.getPopulationData();
const rules = { X: /[02-9]/ };

const editorOptions = {
  FirstName: { disabled: true },
  Position: {
    items: positions,
    searchEnabled: true,
    value: ""
  },
  LastName: { disabled: true },
  HireDate: { width: "100%", value: null },
  BirthDate: { width: "100%", disabled: true },
  Notes: { height: 90 },
  Phone: {
    mask: "+1 (X00) 000-0000",
    maskRules: rules
  }
};

function App(props) {
  return (
    <TabPanel animationEnabled={true} swipeEnabled={true}>
      <Item title="Data Grid" icon="rowfield">
        <DataGrid dataSource={customers} defaultColumns={columns} />
      </Item>
      <Item title="Chart" icon="chart">
        <Chart title="World Population by Decade" dataSource={populationData}>
          <Series type="bar" />
        </Chart>
      </Item>
      <Item title="Form" icon="floppy">
        <Form colCount={2} formData={employee}>
          <SimpleItem
            dataField="FirstName"
            editorOptions={editorOptions.firstName}
          />
          <SimpleItem
            dataField="Position"
            editorType="dxSelectBox"
            editorOptions={editorOptions.Position}
          >
            <RequiredRule message="Position is required." />
          </SimpleItem>
          <SimpleItem
            dataField="LastName"
            editorOptions={editorOptions.LastName}
          />
          <SimpleItem
            dataField="HireDate"
            editorType="dxDateBox"
            editorOptions={editorOptions.HireDate}
          >
            <RequiredRule message="Hire Date is required." />
          </SimpleItem>
          <SimpleItem
            dataField="BirthDate"
            editorType="dxDateBox"
            editorOptions={editorOptions.birthDate}
          />
          <SimpleItem dataField="Address" />
          <SimpleItem
            dataField="Notes"
            colSpan={2}
            editorType="dxTextArea"
            editorOptions={editorOptions.Notes}
          />
          <SimpleItem dataField="Phone" editorOptions={editorOptions.Phone} />
          <SimpleItem dataField="Email" />
        </Form>
      </Item>
      <Item title="Scheduler" icon="event">
        <Scheduler
          dataSource={data}
          views={views}
          defaultCurrentView="week"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9}
        />
      </Item>
    </TabPanel>
  );
}

export default App;
