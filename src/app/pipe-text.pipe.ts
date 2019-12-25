import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeText'
})
export class PipeTextPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    return (value.length > limit) ? value.substring(0, limit) + '...' : value;
  }

}
