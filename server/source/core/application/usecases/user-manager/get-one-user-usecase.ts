import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type GetOneUserInput = {};

type GetOneUserOutput = {};

export class GetOneUserUseCase
  implements IUseCase<GetOneUserInput, GetOneUserOutput>
{
  async execute(
    props: GetOneUserInput
  ): Promise<Result<GetOneUserOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
