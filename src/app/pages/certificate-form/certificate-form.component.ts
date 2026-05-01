import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../services/certificate.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {

  constructor(private certificateService: CertificateService) {}

  @ViewChild('form') form!: NgForm;

  certificate: Certificate = {
    id:  '',
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
    if (this.activity.length === 0) {
      return;
    }
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
    this.certificate.id = uuidv4();
    this.certificateService.addCertificate(this.certificate);

    this.certificate = this.initialStateCertificate();
    this.form.resetForm();
  }

  currentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  initialStateCertificate(): Certificate {
    return {
      id:  '',
      activities: [],
      name: '',
      issueDate: ''
    };
  }
}
