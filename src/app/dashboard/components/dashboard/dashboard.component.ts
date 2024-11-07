import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule, ProgressBarModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activeStr: string = 'performance'
  cardsData: { title: string, value1: string, value2?: string, score: string, stl: string }[] = [
    { title: ' My Performance', value1: '302', value2: '350', score: 'Good score', stl: '' },
    { title: 'Task Assigned', value1: '189', score: '223 Average tasks per user', stl: 'bi bi-card-checklist' },
    { title: 'Task Completion ', value1: '90.56%', score: 'Good score', stl: 'bi bi-card-checklist' },
    { title: 'Attendance % ', value1: '90.5%', score: 'Average score', stl: 'bi bi-box-arrow-in-right' },
    { title: ' Leave %', value1: '100%', score: 'Average score', stl: 'bi bi-box-arrow-in-right' },
  ]
  performcance: string[] = ["Performance", 'Goals', "Reports", "Feedbcks"]
  scores: { score: string, clr: string }[] = [
    { clr: 'success', score: 'Perfect score' },
    { clr: 'primary', score: 'Good score' },
    { clr: 'warning', score: 'Average score' },
    { clr: 'danger', score: 'Bad score' },
  ]
  userData: { name: string, role: string, score: string, lm: string, tm: string }[] = [
    { name: 'Mahesh', role: 'UI deeloper', tm: '83.55%', score: '213', lm: '83.55%' },
    { name: 'Rakesh', role: 'UI deeloper', tm: '83.55%', score: '213', lm: '83.55%' },
    { name: 'Suresh', role: 'UI deeloper', tm: '83.55%', score: '213', lm: '83.55%' },
  ]


  data: any;

  options: any;
  //Apache echartsssssssss
  // myChart = echarts.init(document.getElementById('charts'));
  // myChart = echarts.init(document.getElementById('charts'))

  // Specify the configuration items and data for the chart
  option = {
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    legend: {
      data: ['sales']
    },
    xAxis: {
      data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };

  // Display the chart using the configuration items and data just specified.
  // this.myChart.setOption(option)

  ngOnInit() {
    // this.myChart.setOption(this.option)
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };
  }
  ip: string = ''
  ipdata(event: Event) {
    const x = event.target as HTMLInputElement
    this.ip = x.value.toUpperCase()
  }

}
