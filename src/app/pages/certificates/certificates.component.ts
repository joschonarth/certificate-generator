import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { CertificateItemComponent } from "../../components/certificate-item/certificate-item.component";

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [SecondaryButtonComponent, CertificateItemComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {

}
