
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName = '';
  coins = 1800;
  
hallOfFameItems = [
  { type: 'Super Day', color: '#FFD700', icon: '🥇' }, // Gold medal emoji
  { type: 'Super Day', color: '#C0C0C0', icon: '🥈' }, // Silver medal emoji
  { type: 'Super Day', color: '#CD7F32', icon: '🥉' }  // Bronze medal emoji
];

  progressItems = [
    { subject: 'Financial Basics', progress: 95, color: '#FF6B35' },
    { subject: 'Financial Basics', progress: 80, color: '#FF6B35' },
    { subject: 'Financial Basics', progress: 60, color: '#FF6B35' }
  ];

   constructor(
    private userService: UserService,
    private router: Router // Added Router injection
  ) {}

  ngOnInit() {
    this.userName = this.userService.getUsername();
  }

  // Remove the old onMenuClick method since router will handle navigation
  // Replace with this method to check active routes
  isActiveRoute(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }

  // Optional: Method for programmatic navigation (if needed)
  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  // Keep your existing methods
  onStartPlaying() {
    console.log('Start Playing clicked');
  }

  onTakeBreak() {
    console.log('Take a Peek clicked');
  }

  onAcceptChallenge() {
    console.log('Accept Challenge clicked');
  }
}