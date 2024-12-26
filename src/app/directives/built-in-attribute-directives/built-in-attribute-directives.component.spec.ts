import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInAttributeDirectivesComponent } from './built-in-attribute-directives.component';

describe('BuiltInAttributeDirectivesComponent', () => {
  let component: BuiltInAttributeDirectivesComponent;
  let fixture: ComponentFixture<BuiltInAttributeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInAttributeDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
