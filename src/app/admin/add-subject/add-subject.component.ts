import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { exit } from 'process';
import { finalize } from 'rxjs';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  uploadFile: any;
  private basePath = '/uploads';

  addSubjectForm: FormGroup = new FormGroup({
    Code: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Logo: new FormControl('', Validators.required)
  })
  constructor(private fireStorage: AngularFireStorage,
    private subjectService: SubjectService, private router: Router, private fileStorage: AngularFireStorage) { }

  ngOnInit(): void {
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

  addSubject(){
    let data = {...this.addSubjectForm.value};
    data.Logo = this.uploadFile;
    this.subjectService.add(data).subscribe(resp => {
      this.router.navigate(['/admin/mon-hoc']);
    })
  }
}
