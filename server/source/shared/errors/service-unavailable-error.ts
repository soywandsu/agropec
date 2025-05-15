import { HttpStatus } from "../constants";
import { DomainBaseError } from "./domain-base-error";

export class ServiceUnavailableError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.SERVICE_UNAVAILABLE);
    }
}
