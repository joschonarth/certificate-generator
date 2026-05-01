import { Component, OnInit } from '@angular/core';
import { CertificateItemComponent } from '../../components/certificate-item/certificate-item.component';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertificateItemComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[] = [];

    constructor(private certificateService: CertificateService) {}

    ngOnInit(): void {
      this.certificates = this.certificateService.certificates;
    }
}
