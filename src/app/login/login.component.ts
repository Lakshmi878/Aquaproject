import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Import Router service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = '123';

  constructor(private router: Router) {}

  onLogin() {
    console.log("Username:", this.username);
    console.log("Password:", this.password);
    if (this.username === 'admin' && this.password === '123') {  // Fixed the password
      console.log("Login successful!");
      this.router.navigate(['/home']);
    } else {
      alert('Invalid login credentials');
    }
  }
  
}
