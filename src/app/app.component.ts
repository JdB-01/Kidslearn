// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],

    template: `
    <!-- Simple clean layout - let each component handle its own styling -->
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
    }
  `]
})
export class AppComponent {
  title = 'kids-finance-app';
}
//     template: `
//     <div class="app-layout">
//             <main class="main-content">
//         <router-outlet></router-outlet>
//       </main>
//     </div>
//   `,
//   styles: [`
//     .app-layout {
//       display: flex;
//       height: 100vh;
//     }
//     .main-content {
//       flex: 1;
//       overflow-y: auto;
//     }
//   `]
// })
