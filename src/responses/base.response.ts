/**
 * Base response
 */
export abstract class BaseResponse { 

     /**
      * Status of the response.
      */
     public status: number;

     /**
      * Result of the response.
      */
     public abstract result: any;
}