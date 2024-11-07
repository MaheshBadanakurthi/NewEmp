import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ToastModule, CommonModule, SocialLoginModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    MessageService,
  ]
})
export class LoginComponent implements OnInit {
  public loginDetails: { name: string | null, pswd: string | null } = { name: '', pswd: '' }
  public toaster = inject(MessageService)
  private route = inject(Router)
  user: SocialUser | null = null;
  constructor(private authService: SocialAuthService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log('User signed in:', user);
    });
  }
  public submitLogin(): void {
    try {
      console.log(this.loginDetails);
      (this.loginDetails.name === 'Mahesh' && this.loginDetails.pswd === 'Mahesh@123') ? (this.route.navigate(['dashboard']), this.toaster.add({ severity: 'success', summary: 'Login Success' })) :
        (this.loginDetails.name?.length && this.loginDetails.pswd?.length) ? this.toaster.add({ severity: 'warn', summary: 'Please check login detials' }) : null
    } catch (error) { }
  }
  signInWithGoogle(): void {
    console.log(GoogleLoginProvider.PROVIDER_ID);
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.authService.signIn()
  }

  signOut(): void {
    this.authService.signOut();
  }
}
