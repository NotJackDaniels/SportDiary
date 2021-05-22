import Dependencies from '../../services/Dependencies';

export interface CodeViewInterface {}

export default class CodePresenter {
  view?: CodeViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
  didMount() {}

  setCode = (value: string) => {};

  didPressSendAgainButton() {}
}
