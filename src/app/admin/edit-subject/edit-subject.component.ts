import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
  uploadFile: any;
  private basePath = '/uploads';
  id: string = "";
  subject: any;
  constructor(private route: ActivatedRoute, private subjectService: SubjectService, private fileStorage: AngularFireStorage, private router: Router) { }

  editSubjectForm: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('')
  })
  ngOnInit(): void {
    this.route.params.subscribe(id => {
      this.id = id['id'];
      this.valueSubject(this.id);
    })
  }
  valueSubject(id: any){
    this.subjectService.find(id).subscribe(data => {
      this.subject = data;
    })
  }

  chooseFile(event:any){
    let file = event.target.files[0];
    const filePath = `${this.basePath}/${file.name}`;
    const storageRef = this.fileStorage.ref(filePath);
    this.fileStorage.upload(filePath, file)
    .snapshotChanges()
    .pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          this.uploadFile = downloadURL;
        })
      })
    ).subscribe();
  }

  editSubject(){
    let data = {...this.editSubjectForm.value};
    if(data.Logo == ""){
      data.Logo = this.subject.Logo;
    }else{
      data.Logo = this.uploadFile;
    }
    this.subjectService.update(data, this.id).subscribe(resp => {
      this.router.navigate(['/admin/mon-hoc']);
    })
  }
}
