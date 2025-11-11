$(() => {
  $('#tabpanel-container').dxTabPanel({
    width: 800,
    items: [{
      title: 'Data Grid',
      icon: 'rowfield',
      template: (itemData, itemIndex, element) => {
        const dataGridDiv = $('<div>');
        dataGridDiv.appendTo(element);
        dataGridDiv.dxDataGrid({
          dataSource: customers,
          columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax'],
        });
      },
    }, {
      title: 'Chart',
      icon: 'chart',
      template: (itemData, itemIndex, element) => {
        const chartDiv = $('<div>');
        chartDiv.appendTo(element);
        chartDiv.dxChart({
          dataSource: populationData,
          series: {
            type: 'bar',
          },
          title: 'World Population by Decade',
        });
      },
    }, {
      title: 'Form',
      icon: 'floppy',
      template: (itemData, itemIndex, element) => {
        const formDiv = $('<div>');
        formDiv.appendTo(element);
        formDiv.dxForm({
          colCount: 2,
          formData: employee,
          items: formItems,
        }).dxForm('instance');
      },
    }, {
      title: 'Scheduler',
      icon: 'event',
      badge: '1',
      template: (itemData, itemIndex, element) => {
        const schedulerDiv = $('<div>');
        schedulerDiv.appendTo(element);
        schedulerDiv.dxScheduler({
          dataSource: data,
          views: ['week', 'month'],
          currentView: 'week',
          currentDate: new Date(2017, 4, 25),
          startDayHour: 9,
          height: 600,
        });
      },
    }],
    animationEnabled: true,
    swipeEnabled: true,
  }).dxTabPanel('instance');

  const formItems = [{
    dataField: 'FirstName',
    editorOptions: {
      disabled: true,
    },
  }, {
    dataField: 'Position',
    editorType: 'dxSelectBox',
    editorOptions: {
      items: positions,
      value: '',
    },
    validationRules: [{
      type: 'required',
      message: 'Position is required',
    }],
  }, {
    dataField: 'LastName',
    editorOptions: {
      disabled: true,
    },
  }, {
    dataField: 'HireDate',
    editorType: 'dxDateBox',
    editorOptions: {
      value: null,
      width: '100%',
    },
    validationRules: [{
      type: 'required',
      message: 'Hire date is required',
    }],
  }, {
    dataField: 'BirthDate',
    editorType: 'dxDateBox',
    editorOptions: {
      disabled: true,
      width: '100%',
    },
  }, 'Address', {
    colSpan: 2,
    dataField: 'Notes',
    editorType: 'dxTextArea',
    editorOptions: {
      height: 90,
    },
  }, {
    dataField: 'Phone',
    editorOptions: {
      mask: '+1 (X00) 000-0000',
      maskRules: { 'X': /[02-9]/ },
    },
  }, 'Email'];
});
