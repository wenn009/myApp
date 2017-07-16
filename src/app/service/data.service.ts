import { Injectable } from '@angular/core';
import { PROBLEM } from '../component/data-model/problem';
import { PROBLEMS } from '../mock-problems';

@Injectable()
export class DataService {
  problems : PROBLEM[] = PROBLEMS;
  constructor() { }

  getProblems(): PROBLEM[] {
    return this.problems;
  }
  getProblem(id:number):PROBLEM {
    return this.problems.find( (problem) => problem.id === id);
  }

  addProblem(newproblem: PROBLEM){
    newproblem.id = this.problems.length + 1;
    this.problems.push(newproblem);
    
  }
}
