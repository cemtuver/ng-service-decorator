import { RequestHandler } from "../handlers/request.handler";
import { ResponseHandler } from "../handlers/response.handler";

/**
 * Base request
 */
export abstract class BaseRequest<TResponse>{

     private _requestHandler: RequestHandler;

     constructor(requestHandler: RequestHandler) {
          this._requestHandler = requestHandler;
     }

     /**
      * Invoked when successfull response received.
      * @param response Response
      * @param responseHandler Response handler
      */
     protected onSuccessResponseReceived(response: TResponse, responseHandler: ResponseHandler<TResponse>): void {
          this._requestHandler.onAfterRequestExecution();
          responseHandler.successHandler.call(this._requestHandler, response);
     }

     /**
      * Invoked when error response received.
      * @param response Response
      * @param responseHandler Response handler
      */
     protected onErrorResponseReceived(response: TResponse, responseHandler: ResponseHandler<TResponse>): void {
          this._requestHandler.onAfterRequestExecution();
          responseHandler.errorHandler.call(this._requestHandler, response);
     }

     protected abstract onSend(responseHandler: ResponseHandler<TResponse>): void;

     /**
      * Sends the current request.
      * @param responseHandler Response handler
      */
     public send(responseHandler: ResponseHandler<TResponse>): void {
          this._requestHandler.onBeforeRequestExecution();
          this.onSend(responseHandler);
     }
}