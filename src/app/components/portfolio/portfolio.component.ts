import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [
    CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  portfolios = [
    {
      imagen: "../../../../team-farias.png",
      titulo: "Escuela de Kickboxing",
      descripcion: "Web app para la gestión de inscripciones",
      enlace: "https://github.com/fariasgustavo313/team_farias"
    },
    {
      imagen: "../../../../representacion.png",
      titulo: "Gestión de Ventas y Stock",
      descripcion: "API para administrar ventas y stock en un bazar, permitiendo el control de inventario.",
      enlace: "https://github.com/fariasgustavo313/InventarioBazarAPI"
    },
    {
      imagen: "../../../../representacion.png",
      titulo: "Backend de Bazar",
      descripcion: "API Restful para la gestión de productos, clientes y ventas en un bazar. Optimizado para integrarse con aplicaciones web y mobile",
      enlace: "https://github.com/fariasgustavo313/bazar-api-backend"
    },
    {
      imagen: "../../../../bazar-front.png",
      titulo: "Frontend de Bazar",
      descripcion: "Interfaz web para gestionar productos, clientes y ventas en un bazar. Desarrollado en Angular y conectado a la API backend",
      enlace: "https://github.com/fariasgustavo313/bazar-app-frontend"
    },
    {
      imagen: "../../../../representacion.png",
      titulo: "API Microservicios",
      descripcion: "Arquitectura de microservicios con Spring Boot y Spring Cloud, usando Eureka Server, API Gateway y Config. Server",
      enlace: "https://github.com/fariasgustavo313/sistema-tienda"
    },
  ]
}
