import { DomainBaseError } from "./domain-base-error";

import { HttpStatus } from "@/shared/constants";

export class NotFoundError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.NOT_FOUND);
    }
}
