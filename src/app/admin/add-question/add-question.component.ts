import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  code: string = "";
  addQuestionForm: FormGroup = new FormGroup({
    Text: new FormControl('', Validators.required),
    Marks: new FormControl('', Validators.required)

  })
  constructor(private router: Router, private questionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(ts => {
      this.code = ts['Code'];
    })
  }

  addQuestion(){
    let data = {...this.addQuestionForm.value};
    this.questionService.add(this.code, data).subscribe(resp => {
      this.router.navigate(['/admin/mon-hoc/cau-hoi/' + this.code]);
    })
  }
}
