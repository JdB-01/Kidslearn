import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  userName = ''; // You can get this from UserService

  learningModules = [
    {
      id: 1,
      title: 'Money Basics',
      description: 'Learn what money is, different types of coins and bills, and how money works in everyday life.',
      progress: 4,
      totalLessons: 4,
      completed: true,
      color: 'orange',
      icon: '💰'
    },
    {
      id: 2,
      title: 'Smart Saving',
      description: 'Discover the magic of saving money, setting goals, and watching your money bank grow bigger!',
      progress: 1,
      totalLessons: 4,
      completed: false,
      color: 'orange',
      icon: '🏦'
    },
    {
      id: 3,
      title: 'Wise Spending',
      description: 'Learn the difference between needs and wants, and how to make smart choices when buying things!',
      progress: 3,
      totalLessons: 4,
      completed: false,
      color: 'gray',
      icon: '🛒'
    },
    {
      id: 4,
      title: 'Earning Money',
      description: 'Find out different ways kids can earn money through chores, jobs, and being entrepreneurial!',
      progress: 5,
      totalLessons: 5,
      completed: true,
      color: 'orange',
      icon: '💼'
    },
    {
      id: 5,
      title: 'Banking Basics',
      description: 'Understand what banks do, what accounts are, and why grown-ups use banks instead of cash!',
      progress: 0,
      totalLessons: 4,
      completed: false,
      color: 'blue',
      icon: '🏛️'
    },
    {
      id: 6,
      title: 'Budget Planning',
      description: 'Plan ahead and learn how like a pro and make sure you always have enough for what you need!',
      progress: 0,
      totalLessons: 4,
      completed: false,
      color: 'blue',
      icon: '📊'
    }
  ];

  constructor(
      private userService: UserService,
      private router: Router // Added Router injection
    ) {}
  
    ngOnInit() {
      this.userName = this.userService.getUsername();
    }

  getProgressPercentage(progress: number, total: number): number {
    return Math.round((progress / total) * 100);
  }

  startModule(moduleId: number) {
    console.log('Starting module:', moduleId);
    // Navigate to specific module or handle module start
  }

  continueModule(moduleId: number) {
    console.log('Continuing module:', moduleId);
    // Navigate to specific lesson in module
  }
}
