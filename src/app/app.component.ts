import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { NbaAreaComponent } from './nba-section/nba-area/nba-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NbaAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() { }
  
  text = [
    'The Miami Heat are an American professional basketball team based in Miami. The Heat compete in the National Basketball Association (NBA) as a member of the Southeast Division of the Eastern Conference. The club plays its home games at Kaseya Center, and has won three NBA championships.',
  ]

}
