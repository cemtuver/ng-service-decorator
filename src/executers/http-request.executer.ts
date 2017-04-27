import { Response } from "@angular/http";

/**
 * API to handle execution of {@link HttpRequest}
 */
export abstract class HttpRequestExecuter {
     abstract extractData<T>(response: Response): T;
     abstract handleError(response: Response);
}