import {StackNavigationProp} from '@react-navigation/stack';
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { FilledButton } from '../../components/FilledButton';
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
  description: string,
  numberOfApproaches: string,
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
        repeatAmount: '',
        description: '',
        numberOfApproaches: '',
      }
    }
    hasErrors = (errorType: string) => {
      if (errorType === 'repeatAmount') {
        return !(
          parseInt(this.state.repeatAmount) || this.state.repeatAmount === ''
        );
      }
      else if (errorType === 'numberOfApproaches') {
        return !(
          parseInt(this.state.numberOfApproaches) || this.state.numberOfApproaches === ''
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
              <Input
                placeholder={strings.addExercise.description}
                enableMultiline={true}
                numberOfLines={2}
                value={this.state.description}
                onChangeHandle={(value: string) => this.setState({description: value})}
                errorType={'no'}
                hasErrors={this.hasErrors}
              />
              <Input
                placeholder={strings.addExercise.numberOfApproaches}
                value={this.state.numberOfApproaches}
                onChangeHandle={(value: string) => this.setState({numberOfApproaches: value})}
                errorType={'no'}
                hasErrors={this.hasErrors}
              />
              <Input
                placeholder={strings.addExercise.repeatAmount}
                value={this.state.repeatAmount}
                onChangeHandle={(value: string) => this.setState({repeatAmount: value})}
                errorType={'no'}
                hasErrors={this.hasErrors}
              />
              <FilledButton
                onPress={() => console.log('clicked!')}
                buttonText={strings.addExercise.createExercise}
                Style={styles.filledButton}
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
    filledButton: {
      width: '100%',
    },
  })
