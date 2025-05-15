import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

export interface IBaseRepository<TRow = unknown> {
  save(data: TRow): Promise<Result<TRow, DomainBaseError>>;
  findById(id: string): Promise<Result<TRow | null, DomainBaseError>>;
  findAll(): Promise<Result<TRow[], DomainBaseError>>;
  delete(id: string): Promise<Result<void, DomainBaseError>>;
  update(data: TRow): Promise<Result<TRow, DomainBaseError>>;
}
