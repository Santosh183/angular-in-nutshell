import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-structural-directives',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './built-in-structural-directives.component.html',
  styleUrl: './built-in-structural-directives.component.scss'
})
export class BuiltInStructuralDirectivesComponent {
  items = [
    {
      id: 1,
      name: 'item-1',
      highlight: true
    },
    {
      id: 2,
      name: 'item-2',
      highlight: true
    },
    {
      id: 3,
      name: 'item-3',
      highlight: false
    },
    {
      id: 4,
      name: 'item-4',
      highlight: false
    },
    {
      id: 5,
      name: 'item-5',
      highlight: true
    }
  ]
}
