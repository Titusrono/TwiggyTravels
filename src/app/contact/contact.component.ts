import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor() {}

  submitForm() {
    // Do something with the form data
    console.log('Form Data:', this.formData);

    // Optionally, you can reset the form
    this.resetForm();
  }

  resetForm() {
    // Reset form data
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
