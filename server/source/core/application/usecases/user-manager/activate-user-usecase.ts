import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type ActivateUserInput = {};

type ActivateUserOutput = {};

export class ActivateUserUseCase
  implements IUseCase<ActivateUserInput, ActivateUserOutput>
{
  async execute(
    props: ActivateUserInput
  ): Promise<Result<ActivateUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
