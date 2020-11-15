import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Grade, Subject, Quiz, Question } from "../interfaces";
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { environment } from "../../environments/environment";
const url: string = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private http: HttpClient) { }


  // getGrades():Observable<Grade> {
  //   return this.http.get<Grade>(url + "grades")
  // }

  getGrades() {
    return this.http.get(url + "grades").pipe(
      map((data: any) => <Grade[]>data),
      shareReplay(),
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getSubjectsByGradeId(gradeId: string) {
    return this.http.get(url + "subjects/ByGradeId/" + gradeId).pipe(
      map((data: any) => <Subject[]>data),
      shareReplay(),
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getQuestionsBySubjectId(subjectId: string) {
    return this.http.get(url + "questions/bysubjectid/" + subjectId).pipe(
      map((data: any) => <Question[]>data),
      shareReplay(),
      // tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    // console.error(error);
    let msg = `Error status code ${error.status} at ${error.error}`;
    return throwError(msg);
  }

}
