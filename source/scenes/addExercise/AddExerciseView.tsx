import {StackNavigationProp} from '@react-navigation/stack';
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Input } from '../../components/Input';
import strings from '../../resources/strings';
import { NavigatorParamList } from '../../resources/types';
import AddExercisePresenter, {AddExerciseInterface} from './AddExercisePresenter';

interface Props {
  presenter: AddExercisePresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'addExercise'>;
}

interface State {
  name: string;
  repeatAmount: string,
}

export default class AddExerciseScreen
  extends React.Component<Props, State>
  implements AddExerciseInterface {
    private readonly presenter: AddExercisePresenter;
    constructor(props: Props)
    {
      super(props);
      this.presenter = this.props.presenter;
      this.state = {
        name: '',
        repeatAmount: ''
      }
    }
    hasErrors = (errorType: string) => {
      if (errorType === 'numbers') {
        return !(
          parseInt(this.state.repeatAmount) || this.state.repeatAmount === ''
        );
      }
      return false;
    };
      render(){
        return(
          <ScrollView
            style={styles.mainContainer}
            showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Text style={[styles.formHeading]}>
                {strings.addExercise.exercise}
              </Text>
              <Input
                placeholder={strings.addExercise.name}
                value={this.state.name}
                onChangeHandle={(value: string) => this.setState({name: value})}
                errorType={'no'}
                hasErrors={this.hasErrors}
              />
            </View>
          </ScrollView>
        )
      }
  }

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    formHeading: {
      marginBottom: 8,
      fontSize: 24,
    },
    container: {
      paddingHorizontal: 16,
      marginVertical: 24,
    },
  })
