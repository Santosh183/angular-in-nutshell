import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-built-in-attribute-directives',
  standalone: true,
  imports: [NgClass, FormsModule],
  templateUrl: './built-in-attribute-directives.component.html',
  styleUrl: './built-in-attribute-directives.component.scss'
})
export class BuiltInAttributeDirectivesComponent {

  isOdd = Math.floor(Math.random() * 10) % 2 === 0;
  name = signal('default value')

  classes = {
    'bg-green': this.isOdd,
    'color-white': this.isOdd,
    'bg-yellow': !this.isOdd,
    'color-black': !this.isOdd,
  }
}
