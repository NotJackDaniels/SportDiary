import AsyncStorage from '@react-native-community/async-storage';
import StorageServiceInterface from './StorageServiceInterface';

export default class StorageService implements StorageServiceInterface {
  SaveInStorage = async (exercise: any) => {
    let exercises = await AsyncStorage.getItem('Exercises');
    if (exercises) {
      AsyncStorage.setItem('Exercises', exercises?.concat(exercise));
    } else {
      AsyncStorage.setItem('Exercises', exercise);
    }
  };
}
