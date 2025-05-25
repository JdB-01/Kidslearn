// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService {
//   private _username: string = '';

//   setUsername(username: string): void {
//     this._username = username;
//   }

//   getUsername(): string {
//     return this._username;
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly storageKey = 'username';

  // Initialize BehaviorSubject with the value from localStorage or empty string
  private usernameSubject = new BehaviorSubject<string>(this.loadUsername());
  username$ = this.usernameSubject.asObservable();

  private loadUsername(): string {
    return localStorage.getItem(this.storageKey) || '';
  }

  setUsername(username: string): void {
    this.usernameSubject.next(username);
    localStorage.setItem(this.storageKey, username);
  }

  getUsername(): string {
    return this.usernameSubject.getValue();
  }
}

