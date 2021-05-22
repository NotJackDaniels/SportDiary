import Dependencies from '../../services/Dependencies';

export interface PhoneScreenViewInterface {}

export default class PhoneScreenPresenter {
  view?: PhoneScreenViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  async didPressLoginButton() {}
}
