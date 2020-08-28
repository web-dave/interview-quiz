import { Component, OnInit } from '@angular/core';
import { tasks, ITask, ISolution } from './tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'interview-quiz';
  pos = 0;
  results: { task: number; solved: boolean; yourAnswer: ISolution }[] = [];
  taskList = tasks;
  task: ITask;
  // yourAnswer: null | ISolution = null;
  // rightAnswer: -1 | ISolution = -1;
  score: number = 0;

  ngOnInit() {
    this.task = this.taskList[this.pos];
  }
  next(data: { task: number; i: ISolution }) {
    this.results.push({
      task: data.task,
      solved: data.i === this.task.solution,
      yourAnswer: data.i,
    });
    this.score = this.results.filter((r) => r.solved).length;
    console.log(this.results, this.score);

    if (this.pos + 1 < this.taskList.length) {
      this.pos++;
      this.task = this.taskList[this.pos];
    }
  }
  reset() {
    this.pos = 0;
    this.results = [];
    // yourAnswer: null | ISolution = null;
    // rightAnswer: -1 | ISolution = -1;
    this.score = 0;
  }
}
