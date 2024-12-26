import { Component } from '@angular/core';
import { GreetingPipe } from '../greeting.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [GreetingPipe, FormsModule],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent {
  firstName = '';
  lastName = '';
  salary = 0;
}
