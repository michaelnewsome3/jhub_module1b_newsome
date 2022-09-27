import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodStationReadingComponent } from './flood-station-reading.component';

describe('FloodStationReadingComponent', () => {
  let component: FloodStationReadingComponent;
  let fixture: ComponentFixture<FloodStationReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloodStationReadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloodStationReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
