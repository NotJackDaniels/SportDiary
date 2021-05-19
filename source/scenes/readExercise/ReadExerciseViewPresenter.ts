import Dependencies from '../../services/Dependencies';

export interface ReadExerciseInterface {}

export default class ReadExerciseViewPresenter {
  view?: ReadExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}
