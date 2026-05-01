import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [SecondaryButtonComponent],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css'
})
export class CertificateItemComponent {
  @Input() studantName = '';
  @Input() issueDate = '';
  @Input() id = '';

  constructor(private router: Router) {}

  redirectCertificate() {
    this.router.navigate(['/certificados', this.id]);
  }
}
