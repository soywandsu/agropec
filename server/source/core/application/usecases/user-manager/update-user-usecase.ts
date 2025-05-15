import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type UpdateUserInput = {};

type UpdateUserOutput = {};

export class UpdateUserUseCase
  implements IUseCase<UpdateUserInput, UpdateUserOutput>
{
  async execute(
    props: UpdateUserInput
  ): Promise<Result<UpdateUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
