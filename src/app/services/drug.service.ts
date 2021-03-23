import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators'
import { Drug } from '../drug/drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  getDrug: any;

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/drugs" 

  getDrugs():Observable<Drug[]>{
   return this.http.get<Drug[]>(this.path).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleError)
   );
  }
  addDrug(drug:Drug):Observable<Drug>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content Type':'application/json',
        'Autohorization':'Token'
      })
    }
    return this.http.post<Drug>(this.path, drug, httpOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
      errorMessage ='Bir hata oluştu '+ err.error.message
    }else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }
}
