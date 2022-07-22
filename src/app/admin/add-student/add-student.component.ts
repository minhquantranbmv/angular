import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  formStudent: any = {
    id: "",
    name: "",
    email: "",
    avatar: ""
  }

  // students: Array<any> = [

  // ];
  // saveForm(){
  //   // spread operator
  //   const formData = {...this.formStudent};
  //   // kiểm tra xem code trong form đã tồn tại ở trong this.heroes hay chưa
  //   // nếu tồn tại rồi thì cập nhật
  //   // nếu chưa thì tạo mới
  //   let index = -1;
  //   this.students.forEach((e, i) => {
  //     if(e.id == formData.id){
  //       index = i;
  //     }
  //   });

  //   if(index != -1){
  //     this.students[index] = formData;
  //   }else{
  //     this.students.push(formData);
  //   }

  //   this.formStudent = {
  //     id: "",
  //     name: "",
  //     email: "",
  //     avatar: "",
  //   }
  // }
  constructor(private http:HttpClient, private studentService: StudentService) { }

  ngOnInit(): void {
    this.addStudent();

  }
  addStudent(keyword:string = ""){
    this.studentService.add(keyword)
    .subscribe(data => {
      this.formStudent = data;

    })

  }

  }


