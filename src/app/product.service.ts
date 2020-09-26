import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get<Album>(this._albumUrl).pipe(
      tap(response => JSON.stringify(response)),
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<Product> {
    return this._http.get<Product>(this._productsUrl).pipe(
      tap(response => JSON.stringify(response)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
}

}