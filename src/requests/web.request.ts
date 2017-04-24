import { Observable } from "rxjs/Observable";

import { BaseRequest } from "./base.request";
import { RequestHandler } from "../handlers/request.handler";
import { ResponseHandler } from "../handlers/response.handler";

/**
 * Web request
 */
export abstract class WebRequest<TResponse> extends BaseRequest<TResponse>{

     constructor(requestHandler: RequestHandler) {
          super(requestHandler);
     }

     /**
      * Gets HTTP call for the current request.
      */
     protected abstract getHttpCall(): Observable<TResponse>;

     /**
      * Executes current request with `getHttpCall()`. Invoked when `send` method called in {@link BaseRequest}.
      * @param responseHandler Response handler 
      */
     protected onSend(responseHandler: ResponseHandler<TResponse>): void {
          this.getHttpCall().subscribe(
               response => this.onSuccessResponseReceived(response, responseHandler),
               error => this.onErrorResponseReceived(error, responseHandler)
          );
     }
}