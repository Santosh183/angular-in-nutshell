import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'greeting',
  standalone: true,
  pure: false
})
export class GreetingPipe implements PipeTransform {

  transform(value: string, lastName: string): string {
    return value.trim() ? `Hello ${value} ${lastName}` : '';
  }

}
