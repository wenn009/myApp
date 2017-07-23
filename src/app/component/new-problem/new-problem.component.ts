import { Component, OnInit, Inject} from '@angular/core';
import { PROBLEM } from 'app/component/data-model/problem';

const DEFAULT_PROBLEM: PROBLEM = Object.freeze({
  id: 0,
  name: '',
  description: '',
  difficulty: 'easy'
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  newProblem : PROBLEM = Object.assign({}, DEFAULT_PROBLEM);

  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];

  constructor(@Inject('data') private DataService ) { }

  ngOnInit() {
  }

  addProblem = () => { 
    this.DataService.addProblem(this.newProblem)
      .catch(error => console.log(error.body));
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  
  }

}
