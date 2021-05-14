export default interface StorageServiceInterface {
  SaveInStorage: (exercise: any) => void;
  GetExercises: () => any;
}
