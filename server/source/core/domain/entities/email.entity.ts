import { BadRequestError, DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";
import { BaseEntity } from "./base.entity";

export class EmailEntity extends BaseEntity<string> {
  private constructor(value: string) {
    super(value);
  }

  public static create(value: string): Result<EmailEntity, DomainBaseError> {
    const validation = this.validate(value);

    if (validation.isFailure) {
      return validation;
    }

    return Result.success(new EmailEntity(value));
  }

  public static rebuild(value: string): EmailEntity {
    return new EmailEntity(value);
  }

  private static validate(email: string): Result<undefined, DomainBaseError> {
    const regexIsValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexResult = regexIsValidEmail.test(email);

    return regexResult
      ? Result.success(undefined)
      : Result.failure(
          new BadRequestError("INVALID_EMAIL", "Campo 'email' é inválido")
        );
  }
}
