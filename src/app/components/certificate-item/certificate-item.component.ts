import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [SecondaryButtonComponent, RouterLink],
  templateUrl: './certificate-item.component.html',
  styleUrl: './certificate-item.component.css'
})
export class CertificateItemComponent {
  id: string = '1'
}
