import Dependencies from '../../services/Dependencies';

export interface HomeScreenViewInterface {
  updateCounterText(text: string): void;
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface;

  private dependencies: Dependencies

  constructor(dependencies: Dependencies) {
      this.dependencies = dependencies
  }
}
