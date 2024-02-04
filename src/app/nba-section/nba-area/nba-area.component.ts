import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import {MatDialog} from '@angular/material/dialog';
import { NbaTeamDetailsComponent } from '../../nba-team-details/nba-team-details/nba-team-details.component';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NbaHeaderComponent } from '../../nba-header/nba-header.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-nba-area',
  standalone: true,
  imports: [CommonModule, NbaHeaderComponent, ReactiveFormsModule],
  templateUrl: './nba-area.component.html',
  styleUrl: './nba-area.component.scss'
})
export class NbaAreaComponent implements OnInit{

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(public apiService: ApiService, 
              public dialog: MatDialog,
              public dataService: DataService) { }

  public teams: any;

  data$: Observable<string[]> | undefined;


  @Input() text: any = '';

  ngOnInit() {
    this.getData();
    this.data$ = this.dataService.getData();
    console.log(this.data$, 'data$'); 
    this.profileForm.valueChanges.subscribe(console.log);
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
