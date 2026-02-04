import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  descargarCV(): void {
  // En Angular, los archivos en 'public' se acceden desde la raíz '/'
  const url = '/Farias_Gustavo_CV.pdf'; 
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Farias_Gustavo_Desarrollador_CV.pdf');
  document.body.appendChild(link);
  link.click();
  link.remove();
}
}
