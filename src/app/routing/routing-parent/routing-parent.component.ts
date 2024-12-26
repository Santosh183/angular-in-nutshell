import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-parent',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './routing-parent.component.html',
  styleUrl: './routing-parent.component.scss'
})
export class RoutingParentComponent {

}
