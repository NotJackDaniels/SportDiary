import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export type NavigatorParamList = {
  Splash: undefined;
  home: undefined;
  addExercise: undefined;
  readExercise: {
    item: any;
  };
  editExercise: {
    item: any;
  };
  login: undefined;
  code: {
    confirmation: Promise<FirebaseAuthTypes.ConfirmationResult>;
    phone: string;
  };
};
