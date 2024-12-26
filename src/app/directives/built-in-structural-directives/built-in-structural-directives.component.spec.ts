import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInStructuralDirectivesComponent } from './built-in-structural-directives.component';

describe('BuiltInStructuralDirectivesComponent', () => {
  let component: BuiltInStructuralDirectivesComponent;
  let fixture: ComponentFixture<BuiltInStructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInStructuralDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
