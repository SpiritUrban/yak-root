import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from './interfaces/post.interface';
import { HttpErrorHandler, HandleError } from 'src/app/core/services/http-error-handler.service';
import { environment } from 'src/environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  /** GET heroes from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.baseURL}/blog/posts`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError('getPosts', []))
      );
  }


}
