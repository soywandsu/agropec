import { DomainBaseError } from "./domain-base-error";

import { HttpStatus } from "@/shared/constants";

export class UnauthorizedError extends DomainBaseError {
    constructor(code: string, message: string) {
        super(message, code, HttpStatus.UNAUTHORIZED);
    }
}
