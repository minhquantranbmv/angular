import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditQuestionComponent } from './admin/edit-question/edit-question.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { EditSubjectComponent } from './admin/edit-subject/edit-subject.component';
import { QuestionComponent } from './admin/question/question.component';
import { StudentComponent } from './admin/student/student.component';
import { Subject2Component } from './admin/subject2/subject2.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { FinalComponent } from './screens/final/final.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { RegisterComponent } from './screens/register/register.component';
import { SubjectComponent } from './screens/subject/subject.component';


const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dang-ky",
    component: RegisterComponent
  },
{
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "mon-hoc",
        component: SubjectComponent
      },
      {
        path: 'quiz/:monhoc',
        component: QuizComponent
      },
      {
        path: "ket-qua/:idStudent/:monhoc",
        component: FinalComponent
      }
    ]
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children : [
     {
      path: "",
      component: DashboardComponent
     },

     {
       path: "sinh-vien/add",
       component: AddStudentComponent
     },
     {
       path: "sinh-vien/edit:id",
       component: EditStudentComponent
     },
     {
      path:"sinh-vien",
      component: StudentComponent
     },
     {
       path: "mon-hoc",
       component: Subject2Component
     },
     {
       path: "mon-hoc/add",
       component: AddSubjectComponent
     },
     {
       path: "mon-hoc/edit/:id",
       component: EditSubjectComponent
     },
     {
       path: "mon-hoc/cau-hoi/:Code",
       component: QuestionComponent
     },
     {
       path: "mon-hoc/cau-hoi/:Code/add",
       component: AddQuestionComponent
     },
     {
       path: "mon-hoc/cau-hoi/:Code/edit/:Id",
       component: EditQuestionComponent
     }
    ]
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
