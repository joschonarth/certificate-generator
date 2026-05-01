import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {

  constructor(private certificateService: CertificateService) {}

  certificate: Certificate = {
    activities: [],
    name: '',
    issueDate: ''
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
    this.certificate.issueDate = this.currentDate();
    this.certificateService.addCertificate(this.certificate);
  }

  currentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
}
