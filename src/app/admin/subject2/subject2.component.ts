import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {
  subjects: Array<any> = [];
  constructor(private http: HttpClient, private subjectService: SubjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listSubject();
  }
  listSubject(keyword:string = ""){
    this.subjectService.list(keyword)
    .subscribe(data => {
      this.subjects = data;
    })
  }

  search(s: any){
    let keyword = s.target.value;
    this.listSubject(keyword);
  }

  remove(id:any){
    this.subjects = this.subjects.filter(item => item.id != id);
    this.subjectService.delete(id);
  }
}
