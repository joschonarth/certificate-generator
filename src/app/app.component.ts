import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseUiComponent } from './components/base-ui/base-ui.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CertificateService } from './services/certificate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificates = localStorage.getItem('certificates');
    this.certificateService.certificates = certificates ? JSON.parse(certificates) : [];
  }
}
