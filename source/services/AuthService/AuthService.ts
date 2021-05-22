import AuthServiceInterface from './AuthServiceInterface';
import auth from '@react-native-firebase/auth';

export default class AuthService implements AuthServiceInterface {
  getConfirmation = async (
    phone: string,
    setError: (error: string) => void,
  ) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone);
      return confirmation;
    } catch (e) {
      setError(e);
    }
  };
}
