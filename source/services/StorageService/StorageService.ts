import AsyncStorage from '@react-native-community/async-storage';
import StorageServiceInterface from './StorageServiceInterface';

export default class StorageService implements StorageServiceInterface {
  SaveInStorage = async (exercise: any) => {
    AsyncStorage.clear();
    let exercises: any = await AsyncStorage.getItem('Exercises');
    if (exercises) {
      exercises = JSON.parse(exercises);
      exercises.push(exercise);
      await AsyncStorage.setItem('Exercises', JSON.stringify(exercises));
    } else {
      exercises = [];
      exercises.push(exercise);
      console.warn('added!');
      await AsyncStorage.setItem('Exercises', JSON.stringify(exercises));
    }
  };
  GetExercises = async () => {
    return await AsyncStorage.getItem('Exercises');
  };

  DeleteExercise = async (item: any) => {
    let exercises: any = await AsyncStorage.getItem('Exercises');
    if (exercises) {
      exercises = JSON.parse(exercises);
      let alteredTasks = exercises.filter(function (e: any) {
        return e.id !== item.id;
      });
      AsyncStorage.removeItem('Exercises');
      AsyncStorage.setItem('Exercises', JSON.stringify(alteredTasks));
    }
  };

  EditExercise = async (item: any) => {
    let exercises: any = await AsyncStorage.getItem('Exercises');
    if (exercises) {
      exercises = JSON.parse(exercises);
      let alteredTasks = exercises.filter(function (e: any) {
        return e.id !== item.id;
      });
      AsyncStorage.removeItem('Exercises');
      alteredTasks.push(item);
      AsyncStorage.setItem('Exercises', JSON.stringify(alteredTasks));
    }
  };
}
