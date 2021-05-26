import Dependencies from '../../services/Dependencies';

export interface CaloriesViewInterface {}

export default class CaloriesPresenter {
  view?: CaloriesViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
