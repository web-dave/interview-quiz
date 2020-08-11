import { Component } from '@angular/core';
import { tasks } from './tasks';
import { of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interview-quiz';
  pos = 0;
  results: { task: number; solved: boolean }[] = [];
  tasks = tasks;
  task = tasks[this.pos];
  yourAnswer: null | 0 | 1 | 2 | 3 = null;
  rightAnswer: -1 | 0 | 1 | 2 | 3 = -1;

  next(task, i) {
    this.results.push({ task, solved: i === this.task.solution });
    this.pos++;
    of({ task, solved: i === this.task.solution })
      .pipe(
        tap((data) => {
          this.rightAnswer = this.task.solution;
          this.yourAnswer = i;
          this.results.push({ task, solved: i === this.task.solution });
        }),
        delay(600),
        tap((data) => {
          this.rightAnswer = -1;
          this.yourAnswer = null;
        }),
        delay(300)
      )
      .subscribe((data) => {
        this.pos++;
        this.task = tasks[this.pos];
      });
  }
}
