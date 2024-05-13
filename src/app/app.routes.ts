import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', redirectTo: 'user-profile', pathMatch:'full' },
    {path: 'user-profile', component: UserProfileComponent },
    {path: 'sign-up', component: SignUpComponent },
];
