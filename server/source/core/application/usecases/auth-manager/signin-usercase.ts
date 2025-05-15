import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type SignInInput = {};

type SignInOutput = {};

export class SignInUseCase implements IUseCase<SignInInput, SignInOutput> {
  async execute(
    props: SignInInput
  ): Promise<Result<SignInOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
