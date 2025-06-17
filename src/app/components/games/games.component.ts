import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createFallingCoins();
  }

  createFallingCoins(): void {
    setInterval(() => {
      const coin = document.createElement('div');
      coin.className = 'falling-coin';
      coin.innerHTML = '💰';
      coin.style.left = Math.random() * 100 + '%';
      coin.style.animationDuration = (Math.random() * 3 + 2) + 's';
      
      document.body.appendChild(coin);
      
      setTimeout(() => {
        if (coin.parentNode) {
          coin.parentNode.removeChild(coin);
        }
      }, 5000);
    }, 2000);
  }

  createSparkles(event: MouseEvent): void {
    const sparkleContainer = document.createElement('div');
    sparkleContainer.className = 'sparkle-container';
    sparkleContainer.style.left = event.clientX + 'px';
    sparkleContainer.style.top = event.clientY + 'px';
    
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.innerHTML = '✨';
      sparkle.style.animationDelay = (i * 0.1) + 's';
      sparkleContainer.appendChild(sparkle);
    }
    
    document.body.appendChild(sparkleContainer);
    
    setTimeout(() => {
      if (sparkleContainer.parentNode) {
        sparkleContainer.parentNode.removeChild(sparkleContainer);
      }
    }, 1000);
  }

  onGameClick(gameName: string, event: MouseEvent): void {
    this.createSparkles(event);
    
    // Add a small delay for the sparkle effect before navigation
    setTimeout(() => {
      if (gameName === 'bill-identification') {
        this.router.navigate(['/bill-identification']);
      } else if (gameName === 'money-math') {
        this.router.navigate(['/money-math-challenge']);
      }
    }, 300);
  }

  onFloatingIconClick(event: MouseEvent): void {
    this.createSparkles(event);
  }
}