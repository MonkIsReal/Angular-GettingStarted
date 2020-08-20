import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({name: 'customPipe'})
export class CustomPipe implements PipeTransform {
  transform(value: string, replace: string, by: string): string {
    let newStr = value.replace(replace,by);
    return newStr;
  }
}
