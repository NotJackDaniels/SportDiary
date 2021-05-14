import Dependencies from '../../services/Dependencies';

export interface SplashScreenInterface {}

export default class SplashScreenPresenter {
  view?: SplashScreenInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
