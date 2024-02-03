import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaTeamDetailsComponent } from './nba-team-details.component';

describe('NbaTeamDetailsComponent', () => {
  let component: NbaTeamDetailsComponent;
  let fixture: ComponentFixture<NbaTeamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaTeamDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
