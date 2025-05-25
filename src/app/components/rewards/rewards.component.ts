// reward-shop.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RewardItem {
  id: number;
  name: string;
  points: number;
  description: string;
  icon: string;
  backgroundColor: string;
  available: boolean;
}

@Component({
  selector: 'app-gamiey-rewards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {
  @Input() userPoints: number = 0;
  
  rewardItems: RewardItem[] = [
    {
      id: 1,
      name: 'Mini Robot Toy',
      points: 750,
      description: 'A cool robot that moves and make sounds',
      icon: '🤖',
      backgroundColor: '#fce4ec',
      available: true
    },
    {
      id: 2,
      name: 'Story Book',
      points: 600,
      description: 'An exciting adventure story about magic',
      icon: '📚',
      backgroundColor: '#e8eaf6',
      available: true
    },
    {
      id: 3,
      name: 'Art Set',
      points: 500,
      description: 'Colored pencils, markers and sketchbook',
      icon: '✏️',
      backgroundColor: '#fff3e0',
      available: true
    },
    {
      id: 4,
      name: 'Puzzle Game',
      points: 400,
      description: 'A puzzler for your favorite challenges',
      icon: '🧩',
      backgroundColor: '#e8f5e8',
      available: true
    },
    {
      id: 5,
      name: 'Mini Robot Toy',
      points: 750,
      description: 'A cool robot that moves and make sounds',
      icon: '🤖',
      backgroundColor: '#f5f5f5',
      available: false
    },
    {
      id: 6,
      name: 'Mini Robot Toy',
      points: 750,
      description: 'A cool robot that moves and make sounds',
      icon: '🤖',
      backgroundColor: '#f5f5f5',
      available: false
    }
  ];

  canAfford(itemPoints: number): boolean {
    return this.userPoints >= itemPoints;
  }

  redeemItem(item: RewardItem): void {
    if (item.available && this.canAfford(item.points)) {
      console.log(`Redeeming ${item.name} for ${item.points} points`);
      alert(`Redeeming ${item.name}!`);
      // Emit event to parent to update points
    } else if (!this.canAfford(item.points)) {
      alert('Not enough points!');
    }
  }
}