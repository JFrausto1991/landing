import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent  implements OnInit {

  @Input() target: number = 0;
  @Input() label: string = '';
  currentCount: number = 0;

  ngOnInit(): void {
    this.animateCount();
  }

  animateCount() {
    const increment = this.target / 200; // Controla la velocidad
    const interval = setInterval(() => {
      this.currentCount += increment;
      if (this.currentCount >= this.target) {
        this.currentCount = this.target; // Asegura que el contador no pase del valor objetivo
        clearInterval(interval);
      }
    }, 20); // La animación se actualiza cada 20ms
  }
  
}
