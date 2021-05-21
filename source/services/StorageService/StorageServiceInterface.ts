export default interface StorageServiceInterface {
  SaveInStorage: (exercise: any) => void;
  GetExercises: () => any;
  DeleteExercise: (item: any) => void;
}
