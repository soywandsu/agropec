export abstract class BaseEntity<Model> {
  protected constructor(protected baseProps: Required<Model>) {}

  public get props(): Readonly<Required<Model>> {
    return this.baseProps;
  }

  public update(props: Partial<Model>): void {
    Object.assign(this.props, props);
  }
}
