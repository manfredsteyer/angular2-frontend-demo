import {Injectable, Inject} from 'angular2/core';
import {IFlug} from '../flug';
import {Http, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

declare var fetch: any;

@Injectable()
export class FlugService {
    
    constructor(
        private http: Http) {
    }
    
    find(von: string, nach: string): Observable<IFlug[]> {
        
        var url = "http://www.angular.at/api/flug";
        
        var params = new URLSearchParams();
        params.set('abflugOrt', von);
        params.set('zielOrt', nach);
        
        return this.http
                    .get(url, { search: params })
                    .map(resp => resp.json());
          
    }
    
}