import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodStationComponent } from './flood-station.component';

describe('FloodStationComponent', () => {
  let component: FloodStationComponent;
  let fixture: ComponentFixture<FloodStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloodStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
