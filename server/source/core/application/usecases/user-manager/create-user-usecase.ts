import { IUseCase } from "@/adapters/core/usecase";
import { IDatabaseProvider } from "@/adapters/gateway/database/provider";

import {
    EmailEntity,
    PasswordEntity,
    UserEntity,
} from "@/core/domain/entities";
import { UserModel } from "@/core/domain/models";

import { ROLES } from "@/shared/enum/roles";
import { BadRequestError, DomainBaseError } from "@/shared/errors";
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
    constructor(private readonly database: IDatabaseProvider) {}

    async execute(
        props: CreateUserInput,
    ): Promise<Result<CreateUserOutput, DomainBaseError>> {
        const userExists = await this.database.user.findByEmail(props.email);
        if (userExists.isSuccess) {
            return Result.failure(
                new BadRequestError("USER_EMAIL_TAKEN", "E-mail já cadastrado"),
            );
        }

        const email = EmailEntity.create(props.email);
        if (email.isFailure) return Result.failure(email.error);

        const password = PasswordEntity.create(props.password);
        if (password.isFailure) return Result.failure(password.error);

        const user = UserEntity.create({
            id: crypto.randomUUID(),
            name: props.name,
            email: email.value.props,
            password: password.value.props,
            role: props.role ?? ROLES.USER,
        });

        if (user.isFailure) return Result.failure(user.error);

        const saveResult = await this.database.user.save(user.value.props);
        if (saveResult.isFailure) return Result.failure(saveResult.error);

        const { password: _, ...safeUser } = user.value.props;
        return Result.success(safeUser);
    }
}
