import Dependencies from '../../services/Dependencies';

export interface EditExerciseInterface {}

export default class EditExercisePresenter {
  view?: EditExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  EditExercise = (exercise: any) => {
    console.warn(exercise);
  };
}
