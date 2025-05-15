import { HttpStatus } from "../constants";
import { DomainBaseError } from "./domain-base-error";

export class NotFoundError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.NOT_FOUND);
    }
}
