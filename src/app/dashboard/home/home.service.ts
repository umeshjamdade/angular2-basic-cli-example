import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class HomeService {
    public count: number = 0;
    public invokeEvent: Subject<any> = new Subject();
    constructor(public http: Http, private router: Router) {
    }
    // Common Header method
    addHeader(): Observable<any> {
        let headers = new Headers(); // ... Set content type to JSON
        headers.append('Content-Type', 'application/json');
        let options: any = new RequestOptions({ headers: headers });
        return options;
    }

    loginUser(body: Object): Observable<any> {
        // let Header = this.addHeader();
        return this.http.post('URL', body)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(error);
        return Observable.throw(error);
    }




}