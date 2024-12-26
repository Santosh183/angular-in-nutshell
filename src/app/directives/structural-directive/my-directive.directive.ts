import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface MyDirectiveContext {
  $implicit: any; // by default passed to template. 
  name: string; // we are passing this 
  salary: number; // we are passing this 
}
@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirectiveDirective {

  @Input() appMyDirective: any;

  constructor(
    private templateRef: TemplateRef<MyDirectiveContext>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const context: MyDirectiveContext = {
      $implicit: this.appMyDirective,
      name: this.appMyDirective.name,
      salary: this.appMyDirective.salary,
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, context);
  }

}
