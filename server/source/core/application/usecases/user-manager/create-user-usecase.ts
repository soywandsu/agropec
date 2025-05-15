import { IUseCase } from "@/adapters/core/usecase";
import { EmailEntity } from "@/core/domain/entities/email.entity";
import { PasswordEntity } from "@/core/domain/entities/password.entity";
import { UserEntity } from "@/core/domain/entities/user.entity";
import { UserModel } from "@/core/domain/models/user.model";
import { ROLES } from "@/shared/enum/roles";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role?: ROLES;
};

type CreateUserOutput = Omit<UserModel, "password">;

export class CreateUserUseCase
  implements IUseCase<CreateUserInput, CreateUserOutput>
{
  async execute(
    props: CreateUserInput
  ): Promise<Result<CreateUserOutput, DomainBaseError>> {
    const emailResult = EmailEntity.create(props.email);
    if (emailResult.isFailure) return Result.failure(emailResult.error);

    const passwordResult = PasswordEntity.create(props.password);
    if (passwordResult.isFailure) return Result.failure(passwordResult.error);

    const userResult = UserEntity.create({
      id: crypto.randomUUID(),
      name: props.name,
      email: emailResult.value.props,
      password: passwordResult.value.props,
      role: props.role ?? ROLES.USER,
    });

    if (userResult.isFailure) return Result.failure(userResult.error);
    const user = userResult.value.props;

    return Result.success({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  }
}
