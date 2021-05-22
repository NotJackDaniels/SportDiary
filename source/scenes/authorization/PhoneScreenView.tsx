import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../resources/colors';
import PhoneScreenPresenter, {
  PhoneScreenViewInterface,
} from './PhoneScreenPresenter';
import strings from '../../resources/strings';
import {Input} from '../../components/Input';
import {FilledButton} from '../../components/FilledButton';
import {NavigatorParamList} from '../../resources/types';
import {StackNavigationProp} from '@react-navigation/stack';
import PhoneAuthorizationImg from '../../resources/images/gym.svg';
import {showMessage} from 'react-native-flash-message';

interface Props {
  presenter: PhoneScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'login'>;
}

interface State {
  phone: string;
  message: any;
}

export default class PhoneScreenView
  extends React.Component<Props, State>
  implements PhoneScreenViewInterface {
  private readonly presenter: PhoneScreenPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      phone: '',
      message: '',
    };
  }

  setPhone = (phone: string) => {
    this.setState({phone: phone});
  };

  ShowMessage = (message: string, color: string, bgColor: string) => {
    this.setState({message: message});
    console.warn(message);
    showMessage({
      message: this.state.message.toString(),
      color: color,
      backgroundColor: bgColor,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <PhoneAuthorizationImg
            width={144}
            height={137}
            style={styles.image}
          />
          <Text style={[styles.Header]}>{strings.phoneAuthorization.logo}</Text>
          <Input
            placeholder={strings.phoneAuthorization.phonePlaceholder}
            value={this.state.phone}
            onChangeHandle={(value: string) => this.setPhone(value)}
            marginBottom={0}
            errorType={'empty'}
            hasErrors={() => false}
            keyboardType={'numeric'}
          />
          <FilledButton
            onPress={() =>
              this.presenter.didPressLoginButton(
                this.state.phone,
                this.props.navigation,
              )
            }
            buttonText={strings.phoneAuthorization.login}
            Style={styles.filledButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Base1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginBottom: 24,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
  image: {
    alignSelf: 'center',
  },
  Header: {
    alignSelf: 'center',
    marginBottom: 16,
    fontWeight: '700',
    fontSize: 24,
  },
  filledButton: {
    width: '100%',
    marginTop: 0,
  },
});
