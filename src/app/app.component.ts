import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    AboutComponent,
    TecnologiasComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioApp';

  mostrarContenido: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.mostrarContenido = !this.router.url.includes("/proyecto/");
    });
  }
}
