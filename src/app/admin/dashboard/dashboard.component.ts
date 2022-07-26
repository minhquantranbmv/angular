import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Array<any> = [];
  subjects: Array<any> = [];
  constructor(private studentService: StudentService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.listStudent();
    this.listSubject();
  }

  listStudent(keyword: string = ""){
    this.studentService.list(keyword).subscribe(data => {
      this.students = data;
    });
  }

  listSubject(){
    this.subjectService.list()
    .subscribe(lstSubject => {
      this.subjects = lstSubject;
    })
  }
  search(e: any){
    let keyword = e.target.value;
    this.listStudent(keyword);
  }
}
