import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpRequestExecuter } from "../executers/http-request.executer";

/**
 * Http request
 */
export class HttpRequest {

     private _method: Observable<Response>;

     /**
      * Creates new instance of {@link HttpRequest} class.
      * @param method Http method
      */
     constructor(method: Observable<Response>) {
          this._method = method;
     }

     /**
      * Executes http method.
      * @param executerContext Service which extends {@link WebClientService}
      */
     public execute(executerContext: HttpRequestExecuter) {
          return this._method
               .map(response => executerContext.extractData(response))
               .catch(error => executerContext.handleError(error));
     }

}