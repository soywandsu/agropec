import { BadRequestError, DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";
import { BaseEntity } from "./base.entity";

export class PasswordEntity extends BaseEntity<string> {
  private constructor(value: string) {
    super(value);
  }

  static create(password: string): Result<PasswordEntity, DomainBaseError> {
    const validation = this.validate(password);

    if (validation.isFailure) {
      return validation;
    }

    return Result.success(new PasswordEntity(password));
  }

  private static validate(
    password: string
  ): Result<undefined, DomainBaseError> {
    const MIN_LENGTH = 6;
    const hasMinLength = password.length >= MIN_LENGTH;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialUnicode = /\\u[\dA-Fa-f]{4}/.test(password);

    if (!hasMinLength || !hasLetter || !hasNumber || !hasSpecialUnicode) {
      return Result.failure(
        new BadRequestError(
          "INVALID_PASSWORD",
          "Senha inválida: mínimo 6 caracteres, incluindo letra, número e caractere especial"
        )
      );
    }
    return Result.success(undefined);
  }
}
