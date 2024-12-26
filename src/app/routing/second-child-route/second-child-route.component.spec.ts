import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildRouteComponent } from './second-child-route.component';

describe('SecondChildRouteComponent', () => {
  let component: SecondChildRouteComponent;
  let fixture: ComponentFixture<SecondChildRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChildRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChildRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
