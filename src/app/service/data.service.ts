import { Injectable } from '@angular/core';
import { PROBLEM } from '../component/data-model/problem';
import { PROBLEMS } from '../mock-problems';
import { Http, Response, Headers } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {
  //problems : PROBLEM[] = PROBLEMS;
  private _problemSource = new BehaviorSubject<PROBLEM[]>([]);

  constructor(private http:Http) { }

  getProblems(): Observable<PROBLEM[]> {
    //return this.problems;
    this.http.get('api/v1/problems')
     .toPromise()
     .then((res: Response) => {
       this._problemSource.next(res.json());
     })
     .catch(this.handleError);
    return this._problemSource.asObservable();
  }

  getProblem(id: number) {
    // return this.problems.find( (problem) => problem.id === id);
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }

  addProblem(newproblem: PROBLEM){
    //newproblem.id = this.problems.length + 1;
    //this.problems.push(newproblem);
    const headers = new Headers({"content-type": "application/json"});
    return this.http.post('api/v1/problems', newproblem, headers)
    .toPromise()
    .then((res: Response)=>{
      this.getProblems();
      return res.json();
    })
    .catch(this.handleError);
    
  }

  private handleError(err: any): Promise<any> {
    console.error('An Error occur', err);
    return Promise.reject(err);
  }
}
