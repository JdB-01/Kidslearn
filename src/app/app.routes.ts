// app.routes.ts
import { Routes } from '@angular/router';
import { BillIdentificationGameComponent } from './components/bill-identification-game/bill-identification-game.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RewardspageComponent } from './components/rewardspage/rewardspage.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { LearnComponent } from './components/learn/learn.component';
import { LayoutComponent } from './layout/layout.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { SavingsComponent } from './components/savings/savings.component';

export const routes: Routes = [
  // Login route (no sidebar)
  { path: 'login', component: LoginComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  // Main app routes (with sidebar layout)
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'learn', component: LearnComponent },
      { path: 'games', component: BillIdentificationGameComponent },
      { path: 'rewards', component: RewardspageComponent },
      { path: 'leaderboard', component: LeaderboardComponent},
      { path: 'savings', component: SavingsComponent}
      
       ]
  },
  
  // Wildcard route - redirect to login
  { path: '**', redirectTo: 'login' }
];