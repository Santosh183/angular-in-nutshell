import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, PercentPipe, LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './inbuilt-pipes.component.html',
  styleUrl: './inbuilt-pipes.component.scss'
})
export class InbuiltPipesComponent {
  today = new Date();
}
