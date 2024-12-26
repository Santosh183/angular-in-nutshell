import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight-directive/highlight.directive';

@Component({
  selector: 'app-custom-attribute-directive',
  standalone: true,
  imports: [FormsModule, HighlightDirective],
  templateUrl: './custom-attribute-directive.component.html',
  styleUrl: './custom-attribute-directive.component.scss'
})
export class CustomAttributeDirectiveComponent {
  color = "#fff";
}
