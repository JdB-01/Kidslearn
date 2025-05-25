import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userName = '';
  points = 1800;
  progress = {
    financialBasics: 90,
    smartSpending: 60,
    savingSkills: 20
  };
  constructor(private userService: UserService) {}

    ngOnInit() {
    this.userName = this.userService.getUsername();
  }
}
