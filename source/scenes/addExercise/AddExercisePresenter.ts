import Dependencies from '../../services/Dependencies';

export interface AddExerciseInterface {}

export default class AddExercisePresenter {
  view?: AddExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  SaveExercise = (exercise: any) => {
    this.dependencies.storageService.SaveInStorage(exercise);
  };
}
