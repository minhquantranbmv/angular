import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  // list():Observable<any>{
  //   return this.http.get<any>(environment.subject_api);
  // }
  list(keyword: string = ""): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}?Name_like=${keyword}`);
  }
  find(keyword: string): Observable<any>{
    return this.http.get<any>(`${environment.subject_api}/${keyword}`);
  }
  add(data: any): Observable<any>{
    return this.http.post<any>(environment.subject_api, {...data});
  }
  update(obj: any, id: any): Observable<any>{
    return this.http.put<any>(`${environment.subject_api}/${id}`, {...obj});
  }
  delete(id: any){
    fetch(`${environment.subject_api}/${id}`, {method: "DELETE",});
  }
}
