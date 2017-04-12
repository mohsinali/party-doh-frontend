import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPackagesSliderComponent } from './party-packages-slider.component';

describe('PartyPackagesSliderComponent', () => {
  let component: PartyPackagesSliderComponent;
  let fixture: ComponentFixture<PartyPackagesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyPackagesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPackagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
