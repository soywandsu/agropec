import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type DeleteUserInput = {};

type DeleteUserOutput = {};

export class DeleteUserUseCase
  implements IUseCase<DeleteUserInput, DeleteUserOutput>
{
  async execute(
    props: DeleteUserInput
  ): Promise<Result<DeleteUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
