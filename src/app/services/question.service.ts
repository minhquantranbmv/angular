import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  list(subject_code: String): Observable<any>{
    return this.http.get<any>(`${environment.base_api}/${subject_code}`);
  }
  add(subject_code: any, data: any): Observable<any>{
    return this.http.post<any>(`${environment}/${subject_code}`, {...data});
  }
  update(obj: any, id: any): Observable<any>{
    return this.http.put<any>(`${environment.subject_api}/${id}`, {...obj});
  }
  delete(id: any){
    fetch(`${environment.subject_api}/${id}`, {method: "DELETE",});
  }
}
