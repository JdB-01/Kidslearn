// layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <div class="app-layout">
      <app-sidebar></app-sidebar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-layout {
      display: flex;
      height: 100vh;
    }
    
    .main-content {
      flex: 1;
      overflow-y: auto;
      background: #f8f9fa;
      padding: 20px;
    }
    
    @media (max-width: 768px) {
      .app-layout {
        flex-direction: column;
      }
      
      .main-content {
        padding: 10px;
      }
    }
  `]
})
export class LayoutComponent {}