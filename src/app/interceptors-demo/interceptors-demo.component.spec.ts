import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsDemoComponent } from './interceptors-demo.component';

describe('InterceptorsDemoComponent', () => {
  let component: InterceptorsDemoComponent;
  let fixture: ComponentFixture<InterceptorsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterceptorsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterceptorsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
