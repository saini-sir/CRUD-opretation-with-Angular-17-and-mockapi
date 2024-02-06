import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl ='https://65ae4e041dfbae409a74807d.mockapi.io/message/bigbasket';


  constructor( private httpclient : HttpClient) { }

  getAll(): Observable<any>{
    return this.httpclient.get(this.apiUrl).pipe(catchError((error : HttpErrorResponse)=> {
    return throwError(()=>error);}
    ))
  }

  create(post : Post): Observable<any>{
    return this.httpclient.post(this.apiUrl,post).pipe(catchError((error : HttpErrorResponse)=> {
      return throwError(()=>error);}
      ))
  }
  
  find(id : number) : Observable<any> {
    return this.httpclient.get(`${this.apiUrl}/${id}`).pipe(catchError((error : HttpErrorResponse)=> {
      return throwError(()=>error);}
      ))
  }

  delete(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`).pipe(catchError((error : HttpErrorResponse)=> {
      return throwError(()=>error);}
      )
    );
  }
 update(id : number , post : Post): Observable<any>{
  return this.httpclient.put(`${this.apiUrl}/${id}`,post).pipe(catchError((error : HttpErrorResponse)=> {
    return throwError(()=>error);}
    ))
 }

}
