import { Component } from '@angular/core';
import { MyDirectiveDirective } from '../structural-directive/my-directive.directive';

@Component({
  selector: 'app-custom-structural-directive',
  standalone: true,
  imports: [MyDirectiveDirective],
  templateUrl: './custom-structural-directive.component.html',
  styleUrl: './custom-structural-directive.component.scss'
})
export class CustomStructuralDirectiveComponent {
  someData = {
    name: 'santosh',
    salary: 50000,
  }
}
