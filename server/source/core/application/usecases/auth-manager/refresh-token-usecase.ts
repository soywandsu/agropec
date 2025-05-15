import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type RefreshTokenInput = {};

type RefreshTokenOutput = {};

export class RefreshTokenUseCase
  implements IUseCase<RefreshTokenInput, RefreshTokenOutput>
{
  async execute(
    props: RefreshTokenInput
  ): Promise<Result<RefreshTokenOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
