import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from './tasks';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    list: ITask[],
    results: { task: number; solved: boolean }[]
  ): ITask[] {
    return results
      .filter((item) => !item.solved)
      .map((itm) => itm.task)
      .map((idx) => list[idx]);
  }
}
