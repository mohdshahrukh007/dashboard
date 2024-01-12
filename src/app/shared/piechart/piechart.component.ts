// piechart.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent  {

  chart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Product Sales Chart'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Number of Units Sold'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020'
      }
    },
    series: [
      {
        name: 'Product A',
        type: 'line',
        data: [1, 2, 13,2113,112,311,213,112,31,23,123,1]
      },
      {
        name: 'Product B',
        type: 'line',
        data: [1, 2, 3,213,12,31,23,12,31,23,123,1]
      }
      // Add more series as needed for different products
    ],
  });

}
