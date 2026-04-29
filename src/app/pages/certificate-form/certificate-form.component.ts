import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule],
  templateUrl: './certificate-form.component.html',
  styleUrl: './certificate-form.component.css'
})
export class CertificateFormComponent {
  name = '';
  activity = '';
  activities: string[] = ['Angular', 'Java', 'Spring Boot'];
}
