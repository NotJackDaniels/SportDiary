import AsyncStorage from '@react-native-community/async-storage';
import StorageServiceInterface from './StorageServiceInterface';

export default class StorageService implements StorageServiceInterface {
  SaveInStorage = async (exercise: any) => {
    console.warn(1);
    let exercises = await AsyncStorage.getItem('Exercises');
    if (exercises) {
      await AsyncStorage.mergeItem('Exercises', JSON.stringify(exercise));
    } else {
      await AsyncStorage.setItem('Exercises', JSON.stringify(exercise));
    }
  };
}
