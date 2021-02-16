import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxTabPanelModule } from 'devextreme-angular/ui/tab-panel';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxSchedulerModule } from 'devextreme-angular/ui/scheduler';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxTabPanelModule,
    DxDataGridModule,
    DxChartModule,
    DxFormModule,
    DxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
