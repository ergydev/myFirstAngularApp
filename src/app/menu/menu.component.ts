import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterOutlet, AppComponent, UserProfileComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
