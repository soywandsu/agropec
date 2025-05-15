import { DomainBaseError } from "./domain-base-error";

import { HttpStatus } from "@/shared/constants";

export class ServiceUnavailableError extends DomainBaseError {
    constructor(message: string, code: string) {
        super(message, code, HttpStatus.SERVICE_UNAVAILABLE);
    }
}
