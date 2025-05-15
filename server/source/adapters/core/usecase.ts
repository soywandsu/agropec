import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

export interface IUseCase<TInput, TOutput> {
  execute(props: TInput): Promise<Result<TOutput, DomainBaseError>>;
}
