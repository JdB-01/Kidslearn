

// rewards-container.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsComponent } from '../rewards/rewards.component';
import { MilestonesComponent } from '../milestones/milestones.component';

@Component({
  selector: 'app-rewards-container',
  standalone: true,
  imports: [CommonModule, RewardsComponent, MilestonesComponent],
  templateUrl: './rewardspage.component.html',
  styleUrl: './rewardspage.component.css'
})
export class RewardspageComponent {
  activeTab: string = 'shop';
  userPoints: number = 1000;

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}