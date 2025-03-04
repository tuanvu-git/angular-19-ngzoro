import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRouting } from '@app/auth/auth.routing';
import { LoginComponent } from '@app/auth/login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AuthRouting, FormsModule],
  declarations: [LoginComponent, LogoutComponent],
})
export class AuthModule {}
