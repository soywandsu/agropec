import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type GetAllUserInput = {};

type GetAllUserOutput = {};

export class GetAllUserUseCase
  implements IUseCase<GetAllUserInput, GetAllUserOutput>
{
  async execute(
    props: GetAllUserInput
  ): Promise<Result<GetAllUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
