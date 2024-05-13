import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SignIn } from '../models/signin.models';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newForm: SignIn = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  }

  submitted = false;

  onSubmit(): void {   
    this.submitted = true
    console.log(this.newForm)
  }
}
