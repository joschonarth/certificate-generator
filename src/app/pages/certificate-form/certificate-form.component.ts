import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {

  certificate: Certificate = {
    activities: [],
    name: ''
  };
  activity = '';

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValid() {
    return this.certificate.activities.length > 0 && this.certificate.name.length > 0;
  }

  addActivity() {
    this.certificate.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.certificate.activities.splice(index, 1);
  }

  submit() {
    if (!this.formValid) {
      return;
    }
  }
}
