import Dependencies from '../../services/Dependencies';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import colors from '../../resources/colors';
import {NavigatorParamList} from '../../resources/types';
import {StackNavigationProp} from '@react-navigation/stack';
import strings from '../../resources/strings';

export interface CodeViewInterface {
  setCode: (code: string) => void;
  setBorderColor: (color: string) => void;
  ShowMessage: (message: string, color: string, bgColor: string) => void;
}

export default class CodePresenter {
  view?: CodeViewInterface;
  private dependencies: Dependencies;
  private confirmation:
    | Promise<FirebaseAuthTypes.ConfirmationResult>
    | undefined = undefined;

  constructor(dependencies: Dependencies) {
    this.dependencies = dependencies;
  }

  didMount(conf: Promise<FirebaseAuthTypes.ConfirmationResult>) {
    this.confirmation = conf;
    console.warn(this.confirmation);
  }

  async didPressSendAgainButton(phone: string) {
    this.confirmation = await this.dependencies.authService.getConfirmation(
      phone,
      this.setError,
    );
    console.warn(this.confirmation);
    if (this.confirmation) {
      this.view?.ShowMessage(
        strings.flashMessages.sendCodeAgain,
        colors.Base1,
        colors.Accent,
      );
    }
  }

  private setError = (error: any) => {
    console.warn(error);
    this.view?.ShowMessage(
      strings.flashMessages.wrongCode,
      colors.Base1,
      colors.Error,
    );
  };

  setCode = (
    code: string,
    navigation: StackNavigationProp<NavigatorParamList, 'code'>,
  ) => {
    this.view?.setCode(code);
    this.confirmCode(code, navigation);
  };

  private async confirmCode(
    code: string,
    navigation: StackNavigationProp<NavigatorParamList, 'code'>,
  ) {
    if (code.length === 6) {
      if (this.confirmation) {
        const checked = await this.dependencies.authService.checkCode(
          code,
          this.confirmation,
          this.setError,
        );
        if (checked) {
          navigation.navigate('home');
        }
      }
    }
    if (code.length === 6) {
      this.view?.setBorderColor(colors.Error);
    } else {
      this.view?.setBorderColor(colors.Accent);
    }
  }
}
