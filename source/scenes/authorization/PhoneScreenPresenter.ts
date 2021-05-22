import {StackNavigationProp} from '@react-navigation/stack';
import {NavigatorParamList} from '../../resources/types';
import Dependencies from '../../services/Dependencies';

export interface PhoneScreenViewInterface {}

export default class PhoneScreenPresenter {
  view?: PhoneScreenViewInterface;
  private dependencies: Dependencies;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  async didPressLoginButton(
    phone: string,
    navigation: StackNavigationProp<NavigatorParamList, 'login'>,
  ) {
    const confirmation = await this.dependencies.authService.getConfirmation(
      phone,
      this.setError,
    );
    if (confirmation) {
      navigation.navigate('code', {confirmation: confirmation, phone: phone});
    }
  }

  private setError = (error: string) => {
    console.warn(error);
  };
}
