import { DomainBaseError } from "./domain-base-error";

import { HttpStatus } from "@/shared/constants";

export class ForbiddenError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.FORBIDDEN);
    }
}
