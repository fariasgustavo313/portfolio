import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from '../../models/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-proyecto',
  imports: [
    CommonModule
  ],
  templateUrl: './detalle-proyecto.component.html',
  styleUrl: './detalle-proyecto.component.css'
})
export class DetalleProyectoComponent implements OnInit {

  proyecto: Portfolio | undefined;

  constructor(private activatedRoute: ActivatedRoute, private portfolioService: PortfolioService) {}

  ngAfterViewInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Hace scroll al inicio con animación suave
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.portfolioService.getPortfolioById(id).subscribe(proyecto => {
      this.proyecto = proyecto;
    });
  }
}
