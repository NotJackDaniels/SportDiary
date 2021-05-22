import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamList} from '../../resources/types';
import Dependencies from '../../services/Dependencies';

export interface EditExerciseInterface {}

export default class EditExercisePresenter {
  view?: EditExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  EditExercise = (
    exercise: any,
    navigation: StackNavigationProp<NavigatorParamList, 'editExercise'>,
  ) => {
    console.warn(1);
    this.dependencies.storageService.EditExercise(exercise);
    navigation.navigate('home');
  };
}
