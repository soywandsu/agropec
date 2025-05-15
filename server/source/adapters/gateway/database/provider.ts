import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";
import { IUserRepository } from "./repositories/user.repository";

export type IQuery<T = any> = (
  queryText: string,
  params: any[]
) => Promise<Result<T, DomainBaseError>>;

export interface IDatabaseProvider {
  connect(): Promise<void>;
  query: IQuery;
  transaction<T>(
    work: (trx: IQuery) => Promise<Result<T, DomainBaseError>>
  ): Promise<Result<T, DomainBaseError>>;
  disconnect(): Promise<void>;
  user: IUserRepository;
}
