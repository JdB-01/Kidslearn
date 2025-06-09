// leaderboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

interface LeaderboardEntry {
  rank: number;
  player: string;
  points: number;
  badges: number;
  avatar: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  userName = '';
  searchTerm: string = '';
  selectedPeriod: string = 'May';
  currentPage: number = 1;

  leaderboardData: LeaderboardEntry[] = [
    { rank: 1, player: 'Super Zey', points: 2000, badges: 5, avatar: 'SZ' },
    { rank: 2, player: 'Asia Noah', points: 1600, badges: 4, avatar: 'AN' },
    { rank: 3, player: 'Alice Mac', points: 1600, badges: 4, avatar: 'AM' },
    { rank: 4, player: 'Alice Mac', points: 1500, badges: 4, avatar: 'AM' },
    { rank: 5, player: 'Alice Mac', points: 1600, badges: 4, avatar: 'AM' },
    { rank: 6, player: 'Alice Mac', points: 1500, badges: 4, avatar: 'AM' },
    { rank: 7, player: 'Alice Mac', points: 1500, badges: 4, avatar: 'AM' },
    { rank: 8, player: 'Alice Mac', points: 1500, badges: 4, avatar: 'AM' },
    { rank: 9, player: 'Alice Mac', points: 1500, badges: 4, avatar: 'AM' }
  ];


  constructor(
      private userService: UserService,
      private router: Router // Added Router injection
    ) {}
  
  ngOnInit() {
      this.userName = this.userService.getUsername();
    }
  
  selectPeriod(period: string): void {
    this.selectedPeriod = period;
    // Add logic to filter data based on selected period
  }

  getRowClass(rank: number): string {
    return `rank-${rank}`;
  }
}