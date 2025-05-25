import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

  onSubmit() {
    if (this.username && this.password) {
      this.userService.setUsername(this.username);
      
      console.log('Login attempt:', {
        username: this.username,
        password: this.password
      });
      this.router.navigate(['/dashboard']);

         alert(`Login attempt for user: ${this.username}`);
    } else {
      alert('Please fill in all fields');
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Forgot password clicked');
    alert('Forgot password functionality would be implemented here');
  }
}