import { HttpStatus } from "../constants";
import { DomainBaseError } from "./domain-base-error";

export class InternalServerError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
