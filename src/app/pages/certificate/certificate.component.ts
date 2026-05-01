import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../interfaces/certificate';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit {
  id: string | null = null;
  certificate: Certificate | undefined;

  @ViewChild('certificateContainer') certificateElement!: ElementRef;

  constructor(private certificadoService: CertificateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificate = this.certificadoService.certificates.find(item => item.id === this.id);
    });
  }

  downloadCertificate() {
    html2canvas(this.certificateElement.nativeElement, { scale: 2 }).then(
      canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'certificado_' + this.certificate?.name.replaceAll(' ', '_') + '.png';
        link.click();
      }
    );
  }

}
