import { DomainBaseError } from "./domain-base-error";

import { HttpStatus } from "@/shared/constants";

export class InternalServerError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
