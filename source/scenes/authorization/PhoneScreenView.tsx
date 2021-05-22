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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
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
            onPress={() => this.presenter.didPressLoginButton()}
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
    marginBottom: 48,
  },
  filledButton: {
    width: '100%',
    marginTop: 0,
  },
});
