import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  result: any;
  code: string = "";
  constructor(private route: ActivatedRoute,
    private studentService: StudentService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(pam => {
      this.studentService.find(Number(pam['idStudent']))
      .subscribe(stu => {
        this.code = pam['monhoc'];
        this.result = stu;
      })
    })
  }

  core(d: any){
    if(Number(d) < 5){
      return "Fail";
    } else {
      return "Pass";
    }
  }

}
