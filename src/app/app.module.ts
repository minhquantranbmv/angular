import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectComponent } from './screens/subject/subject.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { FinalComponent } from './screens/final/final.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StudentComponent } from './admin/student/student.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { Subject2Component } from './admin/subject2/subject2.component';
import { AddSubjectComponent } from './admin/add-subject/add-subject.component';
import { EditSubjectComponent } from './admin/edit-subject/edit-subject.component';
import { QuestionComponent } from './admin/question/question.component';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { EditQuestionComponent } from './admin/edit-question/edit-question.component';
import { RegisterComponent } from './screens/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SubjectComponent,
    QuizComponent,
    FinalComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    Subject2Component,
    AddSubjectComponent,
    EditSubjectComponent,
    QuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
