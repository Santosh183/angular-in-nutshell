import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildRouteComponent } from './first-child-route.component';

describe('FirstChildRouteComponent', () => {
  let component: FirstChildRouteComponent;
  let fixture: ComponentFixture<FirstChildRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChildRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChildRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
