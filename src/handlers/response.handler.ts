/**
 * Response handler
 */
export class ResponseHandler<TResponse>{

     /**
      * Invoked when successfull response received.
      * @internal
      */
     private _successHandler: (response: TResponse) => void;

     /**
      * Invoked when error response received.
      * @internal
      */
     private _errorHandler: (error: TResponse) => void;

     /**
      * Creates new instance of {@link ResponseHandler} class.
      * @param successHandler Callback for successfull response.
      * @param errorHandler Callback for error response.
      */
     constructor(successHandler: (response: TResponse) => void, errorHandler: (error: TResponse) => void){
          this._successHandler = successHandler;
          this._errorHandler = errorHandler;
     }

     /**
      * Gets handler for successfull response.
      */
     public get successHandler(): (response: TResponse) => void {
          return this._successHandler;
     }

     /**
      * Gets handler for error response.
      */
     public get errorHandler(): (error: TResponse) => void{
          return this._errorHandler;
     }
}