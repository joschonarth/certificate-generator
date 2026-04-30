import { Component } from '@angular/core';
import { CertificateItemComponent } from '../../components/certificate-item/certificate-item.component';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertificateItemComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
