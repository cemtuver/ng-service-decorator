import { Http, Response, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Base service
 */
export abstract class BaseService {

     /**
      * HTTP client.
      */
     private _http: Http;

     /**
      * Creates new instance of the service.
      * @param http HTTP client
      */
     constructor(http: Http) {
          this._http = http;
     }

     /**
      * Extracts data from response.
      * @param response Response
      */
     protected abstract extractData<T>(response: Response): T;

     /**
      * Handles response error.
      * @param response Response
      */
     protected abstract handlerError<T>(response: Response): T;

     protected httpGet<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
          return this._http.get(url, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpPost<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
          return this._http.post(url, body, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpPut<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T>{
          return this._http.put(url, body, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpDelete<T>(url: string, options?: RequestOptionsArgs): Observable<T>{
          return this._http.delete(url, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpPatch<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T>{
          return this._http.patch(url, body, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpHead<T>(url: string, options?: RequestOptionsArgs): Observable<T>{
          return this._http.head(url, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }

     protected httpOptions<T>(url: string, options?: RequestOptionsArgs): Observable<T>{
          return this._http.options(url, options)
               .map(response => this.extractData.call(this, response))
               .catch(error => this.handlerError.call(this, error));
     }
}