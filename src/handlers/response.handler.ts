import { BaseResponse } from "../responses/base.response";

/**
 * Response handler
 */
export class ResponseHandler<T extends BaseResponse>{

     /**
      * Invoked when successfull response received.
      * @internal
      */
     private _successHandler: (response: T) => void;

     /**
      * Invoked when error response received.
      * @internal
      */
     private _errorHandler: (error: T) => void;

     /**
      * Creates new instance of {@link ResponseHandler} class.
      * @param successHandler Callback for successfull response.
      * @param errorHandler Callback for error response.
      */
     constructor(successHandler: (response: T) => void, errorHandler: (error: T) => void){
          this._successHandler = successHandler;
          this._errorHandler = errorHandler;
     }

     /**
      * Gets handler for successfull response.
      */
     public get successHandler(): (response: T) => void {
          return this._successHandler;
     }

     /**
      * Gets handler for error response.
      */
     public get errorHandler(): (error: T) => void{
          return this._errorHandler;
     }
}