import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './album';

import 'rxjs/add/operator/map';
import 'rxjs/observable';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  

  constructor(private _http: Http) { }

  getAlbum(id: number) observable<Album> {
    return this._http.get(this._albumUrl).map((response) => response.json());


  }


  }

  