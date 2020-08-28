import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result',
})
export class ResultPipe implements PipeTransform {
  transform(
    i: number,
    rightAnswer: number,
    yourAnswer: number
  ): null | 'correct' | 'wrong' {
    let resultClass = null;
    if (i === rightAnswer) {
      resultClass = 'correct';
    } else if (i !== rightAnswer && i === yourAnswer) {
      resultClass = 'wrong';
    }
    return resultClass;
  }
}
