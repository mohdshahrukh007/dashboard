import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart/piechart.component';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
@NgModule({
  declarations: [
    PiechartComponent,
    WeatherChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
  ],exports:[
    PiechartComponent
  ],
  providers: [ 
    // { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] } // add as factory to your providers
  
  ],
})
export class SharedModule { }
