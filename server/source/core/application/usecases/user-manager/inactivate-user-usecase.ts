import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type InactivateUserInput = {};

type InactivateUserOutput = {};

export class InactivateUserUseCase
  implements IUseCase<InactivateUserInput, InactivateUserOutput>
{
  async execute(
    props: InactivateUserInput
  ): Promise<Result<InactivateUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
