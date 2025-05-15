import { ROLES } from "@/shared/enum/roles";
import { BadRequestError, DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";
import { UserModel } from "../models/user.model";
import { BaseEntity } from "./base.entity";

type CreateUserPropsWithRole = Omit<
  UserModel,
  "isActive" | "createdAt" | "updatedAt"
>;

type CreateUserPropsWithoutRole = Omit<CreateUserPropsWithRole, "role"> & {
  role?: UserModel["role"];
};

export class UserEntity extends BaseEntity<UserModel> {
  private constructor(props: UserModel) {
    super(props);
  }

  public static create(
    props: CreateUserPropsWithoutRole
  ): Result<UserEntity, DomainBaseError> {
    const role = props.role ?? ROLES.USER;
    const validation = this.validate({
      ...props,
      role,
    });

    if (validation.isFailure) {
      return validation;
    }

    const userDetails = new UserEntity({
      ...props,
      role,
      createdAt: new Date(),
      updatedAt: null,
      isActive: true,
    });

    return Result.success(userDetails);
  }

  public update(props: Partial<Omit<UserModel, "id" | "createdAt">>): void {
    super.update({
      ...props,
      updatedAt: new Date(),
    });
  }

  public static rebuild(props: UserModel): UserEntity {
    return new UserEntity({
      ...props,
      updatedAt: props.updatedAt ?? null,
    });
  }

  private static validate(
    props: CreateUserPropsWithRole
  ): Result<undefined, DomainBaseError> {
    if (!props.id || props.id.trim() === "") {
      return Result.failure(
        new BadRequestError("INVALID_ID", "Campo 'id' é inválido")
      );
    }
    if (!props.name || props.name.trim() === "") {
      return Result.failure(
        new BadRequestError("INVALID_NAME", "Campo 'name' é inválido")
      );
    }

    if (!Object.values(ROLES).includes(props.role)) {
      return Result.failure(
        new BadRequestError("INVALID_ROLE", "Campo 'role' é inválido")
      );
    }

    return Result.success(undefined);
  }
}
