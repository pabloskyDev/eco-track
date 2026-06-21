import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonSegment,
  IonSegmentButton,
  IonProgressBar,
  IonButton,
  IonModal,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-stats',
  templateUrl: 'stats.page.html',
  styleUrls: ['./stats.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonSegment,
    IonSegmentButton,
    IonProgressBar,
    IonButton,
    IonModal,
    IonList,
    IonItem,
  ],
})
export class StatsPage implements AfterViewInit, OnDestroy {
  @ViewChild('lineChart', { static: false }) lineChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('donutChart', { static: false }) donutChart!: ElementRef<HTMLCanvasElement>;

  private lineChartInstance: Chart | null = null;
  private donutChartInstance: Chart | null = null;
  period: 'daily' | 'weekly' | 'monthly' = 'weekly';
  // Placeholder KPI values (to be bound to real analytics service)
  kpis = {
    co2Total: 12.4, // kg
    co2Reduced: 1.8, // kg
    activities: 28,
    goalPercent: 0.7, // 70%
  };

  // Dummy series for charts (replace with real data)
  trendSeries = [12, 11.5, 10.8, 11.2, 9.6, 8.9, 12.4];
  categoryBreakdown = [50, 30, 20]; // % transporte, alimentacion, energia

  insights: string[] = [
    'Tu mayor fuente de emisiones es transporte.',
    'Has reducido 12% esta semana comparado con la anterior.',
  ];

  // Modal state
  modalOpen = false;
  modalMetric: any = null;

  setPeriod(p: typeof this.period) {
    this.period = p;
    // TODO: trigger data refresh
  }

  openMetric(metric: any) {
    this.modalMetric = metric;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalMetric = null;
  }

  ngAfterViewInit(): void {
    // line chart demo
    try {
      const ctx = this.lineChart?.nativeElement.getContext('2d');
      if (ctx) {
        this.lineChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.trendSeries.map((_, i) => `D${i + 1}`),
            datasets: [
              {
                label: 'Huella CO₂ (kg)',
                data: this.trendSeries,
                borderColor: '#2e8b57',
                backgroundColor: 'rgba(46,139,87,0.12)',
                tension: 0.3,
                pointRadius: 4,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { mode: 'index', intersect: false },
            },
            scales: {
              x: { grid: { display: false } },
              y: { grid: { color: 'rgba(0,0,0,0.04)' } },
            },
          } as any,
        });
      }

      // donut chart demo
      const dctx = this.donutChart?.nativeElement.getContext('2d');
      if (dctx) {
        this.donutChartInstance = new Chart(dctx, {
          type: 'doughnut',
          data: {
            labels: ['Transporte', 'Alimentación', 'Energía'],
            datasets: [
              {
                data: this.categoryBreakdown,
                backgroundColor: ['#2e8b57', '#66c2a5', '#4da6ff'],
                hoverOffset: 6,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
          } as any,
        });
      }
    } catch (e) {
      // fail gracefully in environment without Canvas support
      console.warn('Chart init error', e);
    }
  }

  ngOnDestroy(): void {
    this.lineChartInstance?.destroy();
    this.donutChartInstance?.destroy();
  }
}
