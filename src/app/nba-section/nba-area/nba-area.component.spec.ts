import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaAreaComponent } from './nba-area.component';

describe('NbaAreaComponent', () => {
  let component: NbaAreaComponent;
  let fixture: ComponentFixture<NbaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
