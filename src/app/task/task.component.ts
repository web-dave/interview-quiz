import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask, ISolution } from '../tasks';
import { tap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() pos: number;
  @Output() next = new EventEmitter<{ task: number; i: ISolution }>();
  rightAnswer: -1 | ISolution;
  yourAnswer: ISolution;
  constructor() {}

  ngOnInit(): void {}

  select(task: number, i: ISolution) {
    of({ task, i })
      .pipe(
        tap((data) => {
          this.rightAnswer = this.task.solution;
          this.yourAnswer = data.i;
        }),
        delay(600),
        tap(() => {
          this.rightAnswer = -1;
          this.yourAnswer = null;
        }),
        delay(300)
      )
      .subscribe((data) => {
        this.next.emit({ task: data.task, i: data.i });
      });
  }
}
