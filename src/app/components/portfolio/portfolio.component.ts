import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Portfolio } from '../../models/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[] = [];

  constructor(private router: Router, private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getPortolio().subscribe(portfolios => {
      this.portfolios = portfolios;
    });
  }

  verDetalleProyecto(id: number): void {
    this.router.navigate(["/proyecto", id]);
  }
}
