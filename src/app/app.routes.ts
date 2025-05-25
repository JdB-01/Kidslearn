// app.routes.ts
import { Routes } from '@angular/router';
import { BillIdentificationGameComponent } from './components/bill-identification-game/bill-identification-game.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RewardspageComponent } from './components/rewardspage/rewardspage.component';
import { RewardsComponent } from './components/rewards/rewards.component';

export const routes: Routes = [
  { path: 'game/bill-identification', component: BillIdentificationGameComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
    { path: 'rewards', component: RewardspageComponent }
];