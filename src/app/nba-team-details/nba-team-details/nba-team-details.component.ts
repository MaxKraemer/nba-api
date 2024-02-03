import { Component, Inject } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-nba-team-details',
  standalone: true,
  imports: [],
  templateUrl: './nba-team-details.component.html',
  styleUrl: './nba-team-details.component.scss'
})
export class NbaTeamDetailsComponent {

  team: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.team = data.team;
  }

  ngOnInit() {

  }


}
