import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-money-math-challenge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './moneymath.component.html',
  styleUrls: ['./moneymath.component.css']
})
export class MoneyMathChallengeComponent {
  level = 1;
  score = 0;
  timer = 30;
  maxTime = 30;
  timerInterval: any;
  lives = 3;
  question = '';
  answer = '';
  correctAnswer = '';
  showResult = false;
  resultMessage = '';
  streak = 0;

  ngOnInit() {
    this.generateQuestion();
  }

  startTimer() {
    this.timer = this.maxTime;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.timerInterval);
        this.handleTimeout();
      }
    }, 1000);
  }

  get timerPercentage(): number {
    return (this.timer / this.maxTime) * 100;
  }

  handleTimeout() {
    this.lives--;
    this.streak = 0;
    this.resultMessage = `Time's up! Correct answer: ₦${this.correctAnswer}`;
    this.showResult = true;
    setTimeout(() => {
      if (this.lives > 0) this.generateQuestion();
    }, 1500);
  }

  generateQuestion() {
    this.showResult = false;
    this.answer = '';
    this.startTimer();

    switch (this.level) {
      case 1:
        const quarters = Math.floor(Math.random() * 4);
        const dimes = Math.floor(Math.random() * 4);
        const nickels = Math.floor(Math.random() * 4);
        const total = quarters * 25 + dimes * 10 + nickels * 5;
        this.question = `Count these coins: ${quarters} ₦25 notes, ${dimes} ₦10 notes, ${nickels} ₦5 notes`;
        this.correctAnswer = total.toString();
        break;
      case 2:
        const price = +(Math.random() * 400 + 100).toFixed(0);
        const paid = price + Math.floor(Math.random() * 300 + 100);
        this.question = `You buy sweets for ₦${price} and pay with ₦${paid}. How much change?`;
        this.correctAnswer = (paid - price).toString();
        break;
      case 3:
        const item1 = +(Math.random() * 1000).toFixed(0);
        const item2 = +(Math.random() * 1000).toFixed(0);
        const budget = +(item1 + item2 - Math.random() * 300).toFixed(0);
        this.question = `You have ₦${budget}. Can you buy items for ₦${item1} and ₦${item2}?`;
        this.correctAnswer = budget >= item1 + item2 ? 'Yes' : 'No';
        break;
      case 4:
        const applesA = 4, priceA = 300;
        const applesB = 6, priceB = 400;
        const unitPriceA = priceA / applesA;
        const unitPriceB = priceB / applesB;
        this.question = `Which costs less per apple: 4 apples for ₦300 or 6 apples for ₦400?`;
        this.correctAnswer = unitPriceA < unitPriceB ? '4 for ₦300' : '6 for ₦400';
        break;
    }
  }

  submitAnswer() {
    clearInterval(this.timerInterval);
    if (this.answer.trim().toLowerCase() === this.correctAnswer.toLowerCase()) {
      this.score += 10;
      this.streak++;
      this.resultMessage = 'Correct!';
      if (this.streak % 3 === 0) {
        this.score += 5; // streak bonus
      }
      if (this.level < 4) this.level++;
    } else {
      this.lives--;
      this.streak = 0;
      this.resultMessage = `Incorrect! Correct answer: ₦${this.correctAnswer}`;
    }
    this.showResult = true;
    setTimeout(() => {
      if (this.lives > 0) this.generateQuestion();
    }, 1500);
  }

  resetGame() {
    this.level = 1;
    this.score = 0;
    this.lives = 3;
    this.streak = 0;
    clearInterval(this.timerInterval);
    this.generateQuestion();
  }
}
