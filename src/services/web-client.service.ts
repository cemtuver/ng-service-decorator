import { Observable } from "rxjs/Observable";
import { HttpRequest } from "../requests/http.request";
import { BaseClientService } from "./base-client.service";
import { Http, Response, RequestOptionsArgs } from "@angular/http";
import { HttpRequestExecuter } from "../executers/http-request.executer";

/**
 * Web service decorator
 */
export abstract class WebClientService extends BaseClientService implements HttpRequestExecuter {
     
     /**
      * Extracts data from successfull response.
      * @param response Response
      */
     abstract extractData<T>(response: Response): T;

     /**
      * Handle error from failure response.
      * @param response Response
      */
     abstract handleError(response: Response);

     private _http: Http;

     constructor(http: Http) {
          super();
          this._http = http;
     }

     /**
      * Gets current {@link Http} class instance which is used to perform http requests.
      */
     public get http(): Http {
          return this._http;
     }

     /**
      * Performs a request with `get` http method.
      * @param url Url of the request
      * @param options Options
      */
     protected httpGet<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.get(url, options)).execute(this);
     }

     /**
      * Performs a request with `post` http method.
      * @param url Url of the request
      * @param body Body
      * @param options Options
      */
     protected httpPost<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.post(url, body, options)).execute(this);
     }

     /**
      * Performs a request with `put` http method.
      * @param url Url of the request
      * @param body Body
      * @param options Options
      */
     protected httpPut<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.put(url, body, options)).execute(this);
     }

     /**
      * Performs a request with `delete` http method.
      * @param url Url of the request
      * @param options Options
      */
     protected httpDelete<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.delete(url, options)).execute(this);
     }

     /**
      * Performs a request with `patch` http method.
      * @param url Url of the request
      * @param body Body
      * @param options Options
      */
     protected httpPatch<T>(url: string, body: any, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.patch(url, body, options)).execute(this);
     }

     /**
      * Performs a request with `head` http method.
      * @param url Url of the request
      * @param options Options
      */
     protected httpHead<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.head(url, options)).execute(this);
     }

     /**
      * Performs a request with `options` http method.
      * @param url Url of the request
      * @param options Options
      */
     protected httpOptions<T>(url: string, options?: RequestOptionsArgs): Observable<T> {
          return new HttpRequest(this._http.options(url, options)).execute(this);
     }

}