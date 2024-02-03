import { Component, Input } from '@angular/core';
import { ApiService } from '../../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import { NbaTeamDetailsComponent } from '../../nba-team-details/nba-team-details/nba-team-details.component';

@Component({
  selector: 'app-nba-area',
  standalone: true,
  imports: [],
  templateUrl: './nba-area.component.html',
  styleUrl: './nba-area.component.scss'
})
export class NbaAreaComponent {

  constructor(public apiService: ApiService, 
              public dialog: MatDialog) { }

  public teams: any;
 
  @Input() team: string = '';

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getSeasonsData().subscribe((data) => {
      this.teams = data;
      console.log(this.teams, 'teams');
    });
  }

  openDialog(teamId: string): void {
    const team = this.teams.response.find((team: any) => team.id === teamId);
    console.log(team, 'team');
    this.dialog.open(NbaTeamDetailsComponent, {
      height: '400px',
      width: '600px',
      data: { team }
    });
  }
}
