/* eslint-disable prettier/prettier */
import Dependencies from "../../services/Dependencies";

export interface AddExerciseInterface {
}

export default class AddExercisePresenter {
  view?: AddExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }
}