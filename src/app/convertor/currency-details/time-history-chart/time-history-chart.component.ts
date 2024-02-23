import { Component, DestroyRef, Input, inject } from '@angular/core';
import { CommunicationService } from '../../../shared/communication.service';
import { HttpService } from '../../../services/http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { KEYS, TimeSeriesResponse } from '../../../shared/interfaces';
import { EMPTY, map } from 'rxjs';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
} from 'ng-apexcharts';
import { dataSeries } from './data-series';

const start_date = `${new Date().getFullYear()}-01-01`;
const end_date = new Date().toISOString().split('T')[0];

@Component({
  selector: 'app-time-history-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './time-history-chart.component.html',
  styleUrl: './time-history-chart.component.scss',
})
export class TimeHistoryChartComponent {
  #communicationService = inject(CommunicationService);
  #httpService = inject(HttpService);
  #destroyRef = inject(DestroyRef);
  public chartOptions: any;
  public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;

  ngOnInit() {
    this.getTimeSeries();
  }

  getTimeSeries() {
    const selectedCurrencySignal =
      this.#communicationService.selectedCurrencySignal();
    if (selectedCurrencySignal) {
      const { from, to } = selectedCurrencySignal.query;
      this.#httpService
        .timeSeries(start_date, end_date, from, `${from},${to}`)
        .pipe(
          takeUntilDestroyed(this.#destroyRef),
          map((res) => (res.success ? this.getChartsData(res, to) : EMPTY))
        )
        .subscribe((res: any) => {
          this.initChartDataDemo();
        });
    }
  }

  public initChartDataDemo(): void {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series = [
      {
        name: 'XYZ MOTORS',
        data: dates,
      },
    ];
    this.chart = {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: 'zoom',
      },
    };
    this.dataLabels = {
      enabled: false,
    };
    this.markers = {
      size: 0,
    };
    this.title = {
      text: 'Rate',
      align: 'left',
    };
    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    };
    this.yaxis = {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: 'Price',
      },
    };
    this.xaxis = {
      type: 'datetime',
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    };
  }

  // public initChartData(chartData: number[]): void {
  //   console.log('final data...', chartData);

  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: 'Rates',
  //         data: chartData,
  //       },
  //     ],
  //     chart: {
  //       height: 350,
  //       type: 'bar',
  //     },
  //     plotOptions: {
  //       bar: {
  //         dataLabels: {
  //           position: 'top', // top, center, bottom
  //         },
  //       },
  //     },
  //     dataLabels: {
  //       enabled: true,
  //       formatter: function (val: any) {
  //         return val;
  //       },
  //       offsetY: -20,
  //       style: {
  //         fontSize: '12px',
  //         colors: ['#304758'],
  //       },
  //     },

  //     xaxis: {
  //       categories: [
  //         'Jan',
  //         'Feb',
  //         'Mar',
  //         'Apr',
  //         'May',
  //         'Jun',
  //         'Jul',
  //         'Aug',
  //         'Sep',
  //         'Oct',
  //         'Nov',
  //         'Dec',
  //       ],
  //       position: 'top',
  //       labels: {
  //         offsetY: -18,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       crosshairs: {
  //         fill: {
  //           type: 'gradient',
  //           gradient: {
  //             colorFrom: '#D8E3F0',
  //             colorTo: '#BED1E6',
  //             stops: [0, 100],
  //             opacityFrom: 0.4,
  //             opacityTo: 0.5,
  //           },
  //         },
  //       },
  //       tooltip: {
  //         enabled: true,
  //         offsetY: -35,
  //       },
  //     },
  //     fill: {
  //       type: 'gradient',
  //       gradient: {
  //         shade: 'light',
  //         type: 'horizontal',
  //         shadeIntensity: 0.25,
  //         gradientToColors: undefined,
  //         inverseColors: true,
  //         opacityFrom: 1,
  //         opacityTo: 1,
  //         stops: [50, 0, 100, 100],
  //       },
  //     },
  //     yaxis: {
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         show: false,
  //         formatter: function (val: any) {
  //           return val;
  //         },
  //       },
  //     },
  //     title: {
  //       text: 'Currency Details - 2022',
  //       floating: 0,
  //       offsetY: 320,
  //       align: 'center',
  //       style: {
  //         color: '#444',
  //       },
  //     },
  //   };
  // }

  private getChartsData(res: TimeSeriesResponse, to: string) {
    return KEYS.map((key) => {
      const obj = res.rates[key] as any;
      return obj ? obj[to] : 0;
    });
  }
}
