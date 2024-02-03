import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-nba-team-details',
  standalone: true,
  imports: [],
  templateUrl: './nba-team-details.component.html',
  styleUrl: './nba-team-details.component.scss'
})
export class NbaTeamDetailsComponent {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  showTeamDetails() {

  }

}
