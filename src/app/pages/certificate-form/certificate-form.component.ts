import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {
  name = '';
  activity = '';
  activities: string[] = ['Angular', 'Java', 'Spring Boot'];

  invalidField(control: NgModel) {
    return control.invalid && control.touched;
  }
}
