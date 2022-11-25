import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
} from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexAxisChartSeries | undefined;
//   chart: ApexChart | undefined;
//   xaxis?: ApexXAxis;
//   dataLabels: ApexDataLabels;
//   grid: ApexGrid;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
// };
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-time-histroy-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './time-histroy-chart.component.html',
  styleUrls: ['./time-histroy-chart.component.scss'],
})
export class TimeHistroyChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  @Input() data!: number[];

  constructor() {}

  ngOnInit() {
    this.initChartData(this.data);
  }

  public initChartData(chartData: number[]): void {
    console.log('final data...', chartData);

    this.chartOptions = {
      series: [
        {
          name: "Rates",
          data: chartData
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: any) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val: any) {
            return val;
          }
        }
      },
      title: {
        text: "Currency Details - 2022",
        floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }
}
