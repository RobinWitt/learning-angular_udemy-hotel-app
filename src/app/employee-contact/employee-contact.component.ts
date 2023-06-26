import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css'],
})
export class EmployeeContactComponent {
  signUpMail: string = '';
  submitSuccess: boolean = false;

  onSubmit(): void {
    this.submitSuccess = true;
  }

  onReset(): void {
    this.submitSuccess = false;
    this.signUpMail = '';
  }
}
