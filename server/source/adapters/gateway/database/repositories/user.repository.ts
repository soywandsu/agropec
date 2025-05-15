import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";
import { IBaseRepository } from "./base.repository";

export interface IUserRepository<TUserRow = unknown>
  extends IBaseRepository<TUserRow> {
  findByEmail(email: string): Promise<Result<TUserRow | null, DomainBaseError>>;
}
