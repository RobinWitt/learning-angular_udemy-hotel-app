import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css'],
})
export class EmployeeContactComponent {
  signUpMail: string = '';

  onSubmit(): void {
    console.log('Submit');
  }
}
