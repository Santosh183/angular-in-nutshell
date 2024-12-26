import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardedComponent } from './route-guarded.component';

describe('RouteGuardedComponent', () => {
  let component: RouteGuardedComponent;
  let fixture: ComponentFixture<RouteGuardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteGuardedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
