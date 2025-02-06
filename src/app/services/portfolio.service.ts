import { Observable, of } from 'rxjs';
import { Portfolio } from './../models/portfolio.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  private portfolios: Portfolio[] = [
    {
      id: 1,
      imagen: "../../../../team-farias.png",
      titulo: "Escuela de Kickboxing",
      descripcion: "Web app para la gestión de inscripciones",
      enlace: "https://github.com/fariasgustavo313/team_farias",
      tecnologias: ["HTML", "Bootstrap", "Angular", "EmailJS"],
      trabajo: "Individual",
      retos: "Desarrollar un sistema funcional desde cero, integrando formularios dinámicos y manejo de envíos de correo electrónico sin un backend tradicional.",
      aprendizaje: "Implementación efectiva de EmailJS para automatización de correos, validación de formularios en Angular y optimización de la experiencia del usuario con Bootstrap.",
      metodologia: "Scrum"
    },
    {
      id: 2,
      imagen: "../../../../representacion.png",
      titulo: "Gestión de Ventas y Stock",
      descripcion: "API para administrar ventas y stock en un bazar, permitiendo el control de inventario.",
      enlace: "https://github.com/fariasgustavo313/InventarioBazarAPI",
      tecnologias: ["Java", "MySQL", "Hibernate", "Spring Boot"],
      trabajo: "Individual",
      retos: "Diseñar una lógica de negocio robusta que permitiera manejar diferentes escenarios, como cambios en el inventario en tiempo real, control de stock mínimo y reportes eficientes.",
      aprendizaje: "Optimización de consultas con Hibernate, implementación de transacciones para evitar inconsistencias y diseño de una API bien estructurada siguiendo principios SOLID.",
      metodologia: "Scrum"
    },
    {
      id: 3,
      imagen: "../../../../representacion.png",
      titulo: "Backend de Bazar",
      descripcion: "API Restful para la gestión de productos, clientes y ventas en un bazar. Optimizado para integrarse con aplicaciones web y mobile",
      enlace: "https://github.com/fariasgustavo313/bazar-api-backend",
      tecnologias: ["Java", "MySQL", "Hibernate", "Spring Boot"],
      trabajo: "Individual",
      retos: "Garantizar la consistencia de datos entre transacciones y mejorar el rendimiento de consultas complejas.",
      aprendizaje: "Optimización de consultas con Hibernate y JPQL, y diseño de una API escalable siguiendo principios RESTful.",
      metodologia: "Scrum"
    },
    {
      id: 4,
      imagen: "../../../../bazar-front.png",
      titulo: "Frontend de Bazar",
      descripcion: "Interfaz web para gestionar productos, clientes y ventas en un bazar. Desarrollado en Angular y conectado a la API backend",
      enlace: "https://github.com/fariasgustavo313/bazar-app-frontend",
      tecnologias: ["HTML", "Bootstrap", "Angular", "HttpClient"],
      trabajo: "Individual",
      retos: "Aprender la estructura y funcionamiento de Angular, gestionar correctamente el estado de la aplicación y manejar la comunicación eficiente con la API backend.",
      aprendizaje: "Creación de componentes reutilizables, uso efectivo de servicios y HttpClient para consumo de API, y aplicación de Reactive Forms para validaciones dinámicas.",
      metodologia: "Scrum"
    },
    {
      id: 5,
      imagen: "../../../../representacion.png",
      titulo: "API Microservicios",
      descripcion: "Arquitectura de microservicios con Spring Boot y Spring Cloud, usando Eureka Server, API Gateway y Config. Server",
      enlace: "https://github.com/fariasgustavo313/sistema-tienda",
      tecnologias: ["Java", "Spring Boot", "Spring Cloud", "Eureka Server", "API Gateway"],
      trabajo: "Individual",
      retos: "Configurar correctamente la comunicación entre microservicios, implementar balanceo de carga y manejar la tolerancia a fallos para garantizar la disponibilidad del sistema.",
      aprendizaje: "Uso avanzado de Spring Cloud para la gestión de microservicios, implementación de API Gateway para centralizar peticiones y configuración de circuit breakers con Resilience4j.",
      metodologia: "Scrum"
    }
  ];

  getPortolio(): Observable<Portfolio[]> {
    return of(this.portfolios);
  }

  getPortfolioById(id: number): Observable<Portfolio | undefined> {
    const proyecto = this.portfolios.find(p => p.id === id);
    return of(proyecto);
  }
}
