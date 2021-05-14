import strings from '../../resources/strings';
import Dependencies from '../../services/Dependencies';

export interface HomeScreenViewInterface {
  setExercises(exercises: any): void;
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  async getExercises() {
    let exercises = await this.dependencies.storageService.GetExercises();
    if (exercises) {
      try {
        this.view?.setExercises(exercises);
      } catch {
        console.warn(strings.home.tasksError);
      }
    } else {
      console.warn(strings.home.tasksError);
    }
  }
}
