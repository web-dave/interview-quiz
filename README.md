# InterviewQuiz

A quiz, made of questions ask in interviews

## Please feel free to add moarrrrr questions.

You can add them to the `tasks.ts` and they should have this format. (Please provide a solution as well)

```ts
export interface ITask {
  question: string;
  task: string;
  answers: [string, string, string, string];
  solution: 0 | 1 | 2 | 3;
}
```
