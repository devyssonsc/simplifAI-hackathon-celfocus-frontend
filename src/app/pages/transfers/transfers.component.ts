import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss'
})
export class TransfersComponent {
  detalhesVisiveis = false;
  destinatarioSelecionado = '';

  constructor(private router: Router, private service: RequestApiService) { }

  ngOnInit(): void {
    this.service.addPath(this.router.url);
  }

  verDetalhes(nome: string) {
    this.destinatarioSelecionado = nome;
    this.detalhesVisiveis = true;
  }
}
