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
      enlace: "https://github.com/fariasgustavo313/bazar_api",
      tecnologias: ["Java", "MySQL", "Hibernate", "Spring Boot"],
      trabajo: "Individual",
      retos: "Diseñar una lógica de negocio robusta que permitiera manejar diferentes escenarios, como cambios en el inventario en tiempo real, control de stock mínimo y reportes eficientes.",
      aprendizaje: "Optimización de consultas con Hibernate, implementación de transacciones para evitar inconsistencias y diseño de una API bien estructurada siguiendo principios SOLID.",
      metodologia: "Scrum"
    },
    {
      id: 5,
      imagen: "../../../../representacion.png",
      titulo: "API Microservicios",
      descripcion: "Arquitectura de microservicios con Spring Boot y Spring Cloud, usando Eureka Server, API Gateway y Config. Server",
      enlace: "https://github.com/fariasgustavo313/ecommerce-electrodomesticos-ms",
      tecnologias: ["Java", "Spring Boot", "Spring Cloud", "Eureka Server", "API Gateway"],
      trabajo: "Individual",
      retos: "Configurar correctamente la comunicación entre microservicios, implementar balanceo de carga y manejar la tolerancia a fallos para garantizar la disponibilidad del sistema.",
      aprendizaje: "Uso avanzado de Spring Cloud para la gestión de microservicios, implementación de API Gateway para centralizar peticiones y configuración de circuit breakers con Resilience4j.",
      metodologia: "Scrum"
    },
    {
      id: 6,
      imagen: "../../../../sentinel-project.png",
      titulo: "Sentinel: Sistema de Resiliencia y Autosanación",
      descripcion: "Plataforma de monitoreo activo para contenedores Docker que detecta caídas de servicios y los recupera automáticamente, notificando en tiempo real a través de un Dashboard y alertas de Slack.",
      enlace: "https://github.com/fariasgustavo313/sentinel-project",
      tecnologias: ["Java 17", "Spring Boot", "Docker API", "WebSockets", "Slack API", "Tailwind CSS", "Vanilla JS"],
      trabajo: "Individual",
      retos: "Lograr la comunicación bidireccional en tiempo real entre el servidor y la interfaz mediante WebSockets y garantizar que la lógica de autosanación no entre en bucles infinitos al intentar levantar contenedores con errores críticos.",
      aprendizaje: "Gestión avanzada de la API de Docker mediante Java, implementación de streaming de datos con STOMP/SockJS y diseño de interfaces reactivas livianas sin necesidad de frameworks pesados de frontend.",
      metodologia: "Agile / Personal Research"
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
