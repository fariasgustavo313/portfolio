import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  imports: [
    CommonModule
  ],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent {

  tecnologias = [
    { titulo: "HTML", logo: "devicon-html5-plain colored display-3" },
    { titulo: "CSS", logo: "devicon-css3-plain colored display-3" },
    { titulo: "Bootstrap", logo: "devicon-bootstrap-plain colored display-3" },
    { titulo: "JavaScript", logo: "devicon-javascript-plain colored display-3" },
    { titulo: "Angular", logo: "devicon-angularjs-plain colored display-3" },
    { titulo: "Java", logo: "devicon-java-plain colored display-3" },
    { titulo: "Spring Boot", logo: "devicon-spring-plain colored display-3" },
    { titulo: "Python", logo: "devicon-python-plain colored display-3" },
    { titulo: "Django", logo: "devicon-django-plain colored display-3" },
    { titulo: "SQL", logo: "devicon-mysql-plain colored display-3" },
    { titulo: "Git", logo: "devicon-git-plain colored display-3" },
  ]
}
