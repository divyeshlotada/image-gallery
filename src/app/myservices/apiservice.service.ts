import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  // getdata(){
  //   return this.http.get("http://127.0.0.1:5500/angular/image-gallery/src/app/myjsondata/img.json")
  // }

  getdata(){
    return this.http.get(`http://localhost:3000/posts`).pipe(catchError(this.handleError))
  }

  private handleError(error:HttpErrorResponse){
    let errorMessage = "Something went wrong..."

    return throwError(errorMessage)
  }
}
