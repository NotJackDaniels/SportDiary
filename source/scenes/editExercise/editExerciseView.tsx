import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {FilledButton} from '../../components/FilledButton';
import {Input} from '../../components/Input';
import strings from '../../resources/strings';
import {NavigatorParamList} from '../../resources/types';
import EditExercisePresenter, {
  EditExerciseInterface,
} from './EditExercisePresenter';

interface Props {
  presenter: EditExercisePresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'editExercise'>;
  route: RouteProp<NavigatorParamList, 'editExercise'>;
}

interface State {
  name: string;
  repeatAmount: string;
  description: string;
  numberOfApproaches: string;
}

export default class EditExerciseView
  extends React.Component<Props, State>
  implements EditExerciseInterface {
  private readonly presenter: EditExercisePresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.state = {
      name: '',
      repeatAmount: '',
      description: '',
      numberOfApproaches: '',
    };
  }
  hasErrors = (errorType: string) => {
    if (errorType === 'repeatAmount') {
      return !(
        parseInt(this.state.repeatAmount) || this.state.repeatAmount === ''
      );
    } else if (errorType === 'numberOfApproaches') {
      return !(
        parseInt(this.state.numberOfApproaches) ||
        this.state.numberOfApproaches === ''
      );
    }
    return false;
  };
  setName = (name: string) => {
    this.setState({name: name});
  };
  setDescription = (description: string) => {
    this.setState({description: description});
  };
  setAmountOfApproaches = (numberOfApproaches: string) => {
    this.setState({numberOfApproaches: numberOfApproaches});
  };
  setRepeatAmount = (repeatAmount: string) => {
    this.setState({repeatAmount: repeatAmount});
  };

  SaveExercise = () => {
    const exercise = {
      name: this.state.name,
      description: this.state.description,
      repeatAmount: this.state.repeatAmount,
      numberOfApproaches: this.state.numberOfApproaches,
    };
    this.props.presenter.EditExercise(exercise);
    this.props.navigation.goBack();
  };

  render() {
    return (
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
            onChangeHandle={(value: string) => this.setName(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.addExercise.description}
            enableMultiline={true}
            numberOfLines={2}
            value={this.state.description}
            onChangeHandle={(value: string) => this.setDescription(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.addExercise.numberOfApproaches}
            value={this.state.numberOfApproaches}
            onChangeHandle={(value: string) =>
              this.setAmountOfApproaches(value)
            }
            errorType={'no'}
            hasErrors={this.hasErrors}
            keyboardType={'numeric'}
          />
          <Input
            placeholder={strings.addExercise.repeatAmount}
            value={this.state.repeatAmount}
            onChangeHandle={(value: string) => this.setRepeatAmount(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
            keyboardType={'numeric'}
          />
          <FilledButton
            onPress={this.SaveExercise}
            buttonText={strings.addExercise.createExercise}
            Style={styles.filledButton}
          />
        </View>
      </ScrollView>
    );
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
});
