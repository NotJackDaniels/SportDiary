import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamList} from '../../resources/types';
import Dependencies from '../../services/Dependencies';

export interface ReadExerciseInterface {}

interface Exercise {
  name: string;
  repeatAmount: string;
  description: string;
  numberOfApproaches: string;
}

export default class ReadExerciseViewPresenter {
  view?: ReadExerciseInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  EditExercise(
    item: Exercise,
    navigation: StackNavigationProp<NavigatorParamList, 'readExercise'>,
  ) {
    navigation.navigate('editExercise', {item: item});
  }
}
