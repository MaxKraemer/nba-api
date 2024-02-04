import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaHeaderComponent } from './nba-header.component';

describe('NbaHeaderComponent', () => {
  let component: NbaHeaderComponent;
  let fixture: ComponentFixture<NbaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
