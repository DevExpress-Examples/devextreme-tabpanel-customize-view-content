import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxTabPanelModule, DxDataGridModule, DxChartModule, DxFormModule, DxSchedulerModule } from 'devextreme-angular';
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
