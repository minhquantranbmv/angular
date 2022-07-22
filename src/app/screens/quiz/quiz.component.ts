import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  user_answer: Array<any> = [];
  quizs: Array<any> = [];
  code: string = "";
  students: Array<any> = [];
  working_student: any;
  constructor(private http: HttpClient, private route: ActivatedRoute, private questionService: QuestionService, private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(dsThamSo => {
      this.code = dsThamSo['monhoc'];
      this.getQuiz(this.code);
    })
  }
  getQuiz(code: string){
    this.getStudents();
    this.questionService.list(code)
    .subscribe(lstQuiz => {
      let randArr = this.getDistinctNumberArray(10, lstQuiz.length);
        this.quizs = lstQuiz.filter((el: any, ind: number) => {
          if(randArr.includes(ind)){
            return true;
          }
          return false;
        });
    })
  }

  getStudents(){
    this.studentService.list()
      .subscribe(lstStudent => {
        this.students = lstStudent;
      })
  }

  private getDistinctNumberArray(amount: number, max: number): Array<any>{
    let arr: Array<any> = [];
    while(arr.length < amount){
      let randomNumber = Math.floor(Math.random() * max);
      if(!arr.includes(randomNumber)){
        arr.push(randomNumber);
      }
    }
    return arr;
  }

  choose(qId:number, aId:number):void{
    let existed  = -1;
    this.user_answer.forEach((el: any, index: number) => {
      if(el.qId == qId){
        existed = index;
      }
    });

    if(existed == -1){
      this.user_answer.push({
        qId: qId,
        aId: aId
      });
    }else{
      this.user_answer[existed].aId = aId
    }
  }

  submit(){
    let correctAnswers = 0;
    this.user_answer.forEach((ans: any) => {
      let question = this.quizs.find((item: any) => item.Id == ans.qId);
      if(question.AnswerId == ans.aId){
        correctAnswers++;
      }
    });
    const score = (correctAnswers*10/this.quizs.length)
    this.studentService.find(this.working_student).subscribe((stu: any)=> {
      stu.marks[this.code] = score.toFixed(2);
      this.studentService.update(stu)
      .subscribe(data => {
        this.router.navigate(['/ket-qua', data.id, this.code]);
      })
    })

  }

}
