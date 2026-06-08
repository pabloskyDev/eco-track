import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  trendingDownOutline,
  trendingUpOutline,
  alertCircleOutline,
} from 'ionicons/icons';
import { UserService } from '../core/services/user.service';
import {
  DAILY_RECOMMENDATIONS,
  DailyRecommendation,
} from '../core/data/recommendations.data';

interface WeeklyTrend {
  category: string;
  label: string;
  emoji: string;
  co2Kg: number;
  percentage: number;
  color: string;
}

// ── MOCK DATA (remove when ActivityService is wired in Phase 3) ──────────────
const MOCK_TODAY_CO2 = 2.8;
const MOCK_YESTERDAY_CO2 = 4.0;
const MOCK_DAILY_GOAL = 5.0;
const MOCK_WEEKLY_TRENDS: WeeklyTrend[] = [
  {
    category: 'transport',
    label: 'Transporte',
    emoji: '🚗',
    co2Kg: 12.4,
    percentage: 51,
    color: '#4CAF50',
  },
  {
    category: 'food',
    label: 'Alimentación',
    emoji: '🍔',
    co2Kg: 7.8,
    percentage: 32,
    color: '#FF9800',
  },
  {
    category: 'electronics',
    label: 'Electrónicos',
    emoji: '💻',
    co2Kg: 4.2,
    percentage: 17,
    color: '#2196F3',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    BaseChartDirective,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonBadge,
  ],
})
export class HomePage implements OnInit {
  userName = '';
  dateLabel = '';

  readonly todayCO2 = MOCK_TODAY_CO2;
  readonly yesterdayCO2 = MOCK_YESTERDAY_CO2;
  readonly dailyGoal = MOCK_DAILY_GOAL;
  readonly weeklyTrends = MOCK_WEEKLY_TRENDS;

  dailyTip!: DailyRecommendation;
  doughnutData!: ChartData<'doughnut'>;

  readonly doughnutOptions: ChartOptions<'doughnut'> = {
    cutout: '78%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    responsive: true,
    maintainAspectRatio: true,
    animation: { duration: 900, easing: 'easeInOutQuart' },
  };

  constructor(private userService: UserService) {
    addIcons({ trendingDownOutline, trendingUpOutline, alertCircleOutline });
  }

  async ngOnInit() {
    const profile = await this.userService.getProfile();
    if (profile) this.userName = profile.name;

    this.dateLabel = new Date().toLocaleDateString('es-CO', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });

    this.dailyTip = this.getDailyTip();
    this.buildChart();
  }

  get isExceeded(): boolean {
    return this.todayCO2 > this.dailyGoal;
  }

  get betterThanYesterday(): boolean {
    return this.todayCO2 < this.yesterdayCO2;
  }

  get savedKg(): string {
    return Math.abs(this.yesterdayCO2 - this.todayCO2).toFixed(1);
  }

  get progressPercent(): string {
    return Math.min((this.todayCO2 / this.dailyGoal) * 100, 100).toFixed(0);
  }

  get statusMessage(): string {
    if (this.isExceeded) {
      const over = (this.todayCO2 - this.dailyGoal).toFixed(1);
      return `Excediste tu meta por ${over} kg. ¡Mañana puedes mejorar!`;
    }
    if (this.betterThanYesterday) {
      return `Vas bien, ahorraste ${this.savedKg} kg comparado con ayer 🌿`;
    }
    return `Gastaste ${this.savedKg} kg más que ayer. Aún puedes reducirlo hoy.`;
  }

  get statusType(): 'good' | 'warning' | 'exceeded' {
    if (this.isExceeded) return 'exceeded';
    if (this.betterThanYesterday) return 'good';
    return 'warning';
  }

  get statusIcon(): string {
    const map = {
      good: 'trending-down-outline',
      warning: 'trending-up-outline',
      exceeded: 'alert-circle-outline',
    };
    return map[this.statusType];
  }

  get impactBadgeColor(): string {
    const map: Record<string, string> = {
      alto: 'danger',
      medio: 'warning',
      bajo: 'success',
    };
    return map[this.dailyTip?.impact] ?? 'medium';
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/images/plants-image.jpg';
  }

  private buildChart() {
    const remaining = Math.max(this.dailyGoal - this.todayCO2, 0);
    const usedColor = this.isExceeded ? '#FF5722' : '#4CAF50';

    this.doughnutData = {
      datasets: [
        {
          data: this.isExceeded
            ? [this.dailyGoal, 0]
            : [this.todayCO2, remaining],
          backgroundColor: [usedColor, '#E8F5E9'],
          borderWidth: 0,
          hoverBackgroundColor: [usedColor, '#E8F5E9'],
        },
      ],
    };
  }

  private getDailyTip(): DailyRecommendation {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const dayOfYear = Math.floor(
      (Date.now() - start.getTime()) / (1000 * 60 * 60 * 24),
    );
    return DAILY_RECOMMENDATIONS[dayOfYear % DAILY_RECOMMENDATIONS.length];
  }
}
