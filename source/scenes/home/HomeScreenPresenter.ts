import {StackNavigationProp} from '@react-navigation/stack';
import strings from '../../resources/strings';
import {NavigatorParamList} from '../../resources/types';
import Dependencies from '../../services/Dependencies';

export interface HomeScreenViewInterface {
  setExercises(exercises: any): void;
}

interface Exercise {
  name: string;
  repeatAmount: string;
  description: string;
  numberOfApproaches: string;
}

export default class HomeScreenPresenter {
  view?: HomeScreenViewInterface;

  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didPressReadExerciseButton(
    item: Exercise,
    navigation: StackNavigationProp<NavigatorParamList, 'home'>,
  ) {
    navigation.navigate('readExercise', {item: item});
  }

  async deleteExercise(item: any) {
    await this.dependencies.storageService.DeleteExercise(item);
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
