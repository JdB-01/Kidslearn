
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  isCompleted: boolean;
  progress?: {
    current: number;
    total: number;
  };
  color: string;
}


@Component({
  selector: 'app-milestones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.css'
})
export class MilestonesComponent {
   @Input() userPoints: number = 0; 
  activeFilter: string = 'all';

  filterTabs = [
    { key: 'all', label: 'All Badges' },
    { key: 'saving', label: 'Saving' },
    { key: 'learning', label: 'Learning' },
    { key: 'games', label: 'Games' }
  ];

badges: Badge[] = [
  {
    id: 'super-saver',
    title: 'Super Saver',
    description: 'Saved N$500 in your account',
    icon: 'fas fa-piggy-bank',  // Changed from fa-puzzle-piece
    isCompleted: true,
    color: '#6c7b95',
    progress: undefined
  },
  {
    id: 'quick-learner',
    title: 'Quick Learner',
    description: 'Completed 5 lessons in one day',
    icon: 'fas fa-lightbulb',  // Changed from fa-puzzle-piece
    isCompleted: true,
    color: '#b8c17a',
    progress: undefined
  },
  {
    id: 'first-win',
    title: 'First Win',
    description: 'Complete your first win',
    icon: 'fas fa-trophy',  // This one is correct
    isCompleted: true,
    color: '#cd7f7f',
    progress: undefined
  },
  {
    id: 'money-whizz',
    title: 'Money Whizz',
    description: 'Complete 10 quizzes',
    icon: 'fas fa-coins',  // Changed from fa-puzzle-piece
    isCompleted: false,
    color: '#c4965a',
    progress: { current: 3, total: 10 }  // Updated progress
  },
  {
    id: 'game-champion',
    title: 'Game Champion',
    description: 'Win 5 games in a row',
    icon: 'fas fa-gamepad',  // Changed from fa-comments
    isCompleted: false,
    color: '#d47f7f',
    progress: { current: 1, total: 5 }
  }
];

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  getFilteredBadges(): Badge[] {
    if (this.activeFilter === 'all') {
      return this.badges;
    }
    
    // Filter based on badge categories
    return this.badges.filter(badge => {
      switch (this.activeFilter) {
        case 'saving':
          return badge.id.includes('saver') || badge.id.includes('saving');
        case 'learning':
          return badge.id.includes('learn') || badge.id.includes('quiz');
        case 'games':
          return badge.id.includes('game') || badge.id.includes('win') || badge.id.includes('champion');
        default:
          return true;
      }
    });
  }
}