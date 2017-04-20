/**
 * Request handler interface
 * Implement `RequestHandler` in wherever you send request.
 */
export interface RequestHandler {

     /**
      * Invoked right before request execution.
      */
     onBeforeRequestExecution(): void;

     /**
      * Invoked right after request execution and before response handler.
      */
     onAfterRequestExecution(): void;

}