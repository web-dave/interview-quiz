import { Component, OnInit, Input } from '@angular/core';
import { ITask } from '../tasks';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() tasks: ITask[];
  @Input() score: string;
  resultText: string = 'Oh, Your score is: ';
  constructor() {}

  ngOnInit(): void {}
}
