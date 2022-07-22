import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  code: string = "";
  questions: Array<any> = [];
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(dsThamSo => {
      this.code = dsThamSo['Code'];
    });
    this.http.get<any>("http://localhost:3000/" + this.code)
      .subscribe(data => {
        this.questions = data;
    });
  }
}
