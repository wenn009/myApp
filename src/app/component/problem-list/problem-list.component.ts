import { Component, OnInit, Inject } from '@angular/core';
import { PROBLEM } from 'app/component/data-model/problem';


@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  
  problems: PROBLEM[];

  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problems = this.dataService.getProblems();
  }

}
