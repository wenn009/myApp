import { Component, OnInit } from '@angular/core';
import { PROBLEM } from 'app/component/data-model/problem';

const PROBLEMS: PROBLEM[] = [ {
  id: 1,
  name: "Reverse Integer",
  description: "Reverse digits of an integer. Example1: x = 123, return 321, Example2: x = -123, return -321",
  difficulty: "easy"
},
{
  id: 2,
  name:"Integer to Roman",
  description: "Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.",
  difficulty:"medium"
},
{
  id: 3,
  name:"3Sum",
  description: "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. Note: The solution set must not contain duplicate triplets.",
  difficulty:"medium"
},
{
  id: 4,
  name:"Regular Expression Matchingg",
  description: "Implement regular expression matching with support for '.' and '*'..' Matches any single character.' Matches zero or more of the preceding element. he matching should cover the entire input string (not partial). The function prototype should be: bool isMatch(const char *s, const char *p)",
  difficulty: "hard"
},
{
  id: 5,
  name: "Palindrome Number",
  description: "Determine whether an integer is a palindrome. Do this without extra space.",
  difficulty: "easy"
}
];
@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  constructor() { }

  problems: PROBLEM[];

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problems = PROBLEMS;
  }

}
