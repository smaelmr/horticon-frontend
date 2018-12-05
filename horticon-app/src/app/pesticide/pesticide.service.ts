
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

    pesticideById(id: string): Observable<Pesticide>{
    return this.http.get(`${HORTICON_API}/pesticide/${id}`).pipe(
        map(response => response.json()),
        catchError(ErrorHandler.handleError))
    }

    pesticideCreate(pesticide: Pesticide) {
        return this.http.post(`${HORTICON_API}/pesticide`, pesticide);
      }

    pesticideUpdate(pesticide: Pesticide) {
        return this.http.post(`${HORTICON_API}/pesticide` + '/' + pesticide.id, pesticide);
    }

    pesticideDelete(id: string) {
        return this.http.delete(`${HORTICON_API}/pesticide` + '/' + id);
    }
    
    
    
   

}