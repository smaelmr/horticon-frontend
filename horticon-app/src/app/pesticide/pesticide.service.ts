
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


import { Pesticide } from './pesticide.model'
import { HORTICON_API } from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable() 
export class PesticideService {

    constructor(private http: Http){}

    debugger;

    pesticides(search?: string): Observable<Pesticide[]> {
        return this.http.get(`${HORTICON_API}/pesticide`).pipe(
          map(response => response.json()),
          catchError(ErrorHandler.handleError))
        
      }
}