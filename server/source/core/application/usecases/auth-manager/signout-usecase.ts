import { IUseCase } from "@/adapters/core/usecase";
import { DomainBaseError } from "@/shared/errors";
import { Result } from "@/shared/utils";

type SignOutInput = {};

type SignOutOutput = {};

export class SignOutUseCase implements IUseCase<SignOutInput, SignOutOutput> {
  async execute(
    props: SignOutInput
  ): Promise<Result<SignOutOutput, DomainBaseError>> {
    throw new Error("Method not implemented.");
  }
}
