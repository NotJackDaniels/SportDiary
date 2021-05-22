import React from 'react';
import {NavigatorParamList} from '../../resources/types';
import {StackNavigationProp} from '@react-navigation/stack';
import CodePresenter, {CodeViewInterface} from './CodePresenter';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../resources/colors';
import strings from '../../resources/strings';
import {CodeInput} from '../../components/CodeInput';
import {FilledButton} from '../../components/FilledButton';
import {RouteProp} from '@react-navigation/native';

interface Props {
  presenter: CodePresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'code'>;
  route: RouteProp<NavigatorParamList, 'code'>;
}

interface State {
  code: string;
  borderColor: string;
  message: string;
}

export default class CodeView
  extends React.Component<Props, State>
  implements CodeViewInterface {
  private readonly presenter: CodePresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.state = {
      code: '',
      message: '',
      borderColor: colors.Accent,
    };
  }

  componentDidMount() {
    this.presenter.didMount();
  }

  setCode = (code: string) => {
    this.setState({code: code});
  };

  setBorderColor = (color: string) => {
    this.setState({borderColor: color});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.selfAlign]}>
          {strings.phoneAuthorization.code}
        </Text>
        <View style={styles.content}>
          <CodeInput
            placeholder={strings.phoneAuthorization.codePlaceholder}
            value={this.state.code}
            onChangeHandle={(value: string) => this.presenter.setCode(value)}
            marginBottom={0}
            borderColor={this.state.borderColor}
          />
          <FilledButton
            onPress={() => this.props.presenter.didPressSendAgainButton()}
            buttonText={strings.phoneAuthorization.sendCodeAgain}
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
    width: 216,
    textAlign: 'center',
  },
  filledButton: {
    width: '100%',
    backgroundColor: colors.Base1,
    marginTop: 0,
  },
  selfAlign: {
    alignSelf: 'center',
  },
});
