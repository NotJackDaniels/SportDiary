import Dependencies from "../../services/Dependencies";
import strings from "../../resources/strings";

export interface SplashScreenInterface {}

export default class SplashScreenPresenter {
  view?: SplashScreenInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}