import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-savings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent {
  points = 1000;
  weeklyGoal = 2000;
  savedThisWeek = 300;
  
  // Calculate progress percentage
  get progressPercentage(): number {
    return Math.min((this.savedThisWeek / this.weeklyGoal) * 100, 100);
  }
  
  // Method to add money to savings
  addMoneyToSavings(): void {
    // This would typically open a modal or navigate to an add money page
    console.log('Add money to savings clicked');
    // For demo purposes, let's add 100 to saved this week
    this.savedThisWeek += 100;
  }
}