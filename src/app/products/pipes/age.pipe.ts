import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})

export class AgePipe implements PipeTransform {
  transform(age: number): string {
    let text: string = "";

    if (age >= 18) {
      text = "(Mayor de edad)";
    } else {
      text = "(Menor de edad)";
    }
    return age + ' años ' + text;
  }
}
