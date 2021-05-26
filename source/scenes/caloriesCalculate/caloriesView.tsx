import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {FilledButton} from '../../components/FilledButton';
import {Input} from '../../components/Input';
import strings from '../../resources/strings';
import {NavigatorParamList} from '../../resources/types';
import CaloriesPresenter, {CaloriesViewInterface} from './caloriesPresenter';

interface Props {
  presenter: CaloriesPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'addExercise'>;
}

interface State {
  height: string;
  weight: string;
  age: string;
  sex: string;
}

export default class caloriesScreen
  extends React.Component<Props, State>
  implements CaloriesViewInterface {
  private readonly presenter: CaloriesPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.state = {
      height: '',
      weight: '',
      age: '',
      sex: '',
    };
  }
  hasErrors = () => {
    return false;
  };
  setHeight = (height: string) => {
    this.setState({height: height});
  };
  setWeight = (weight: string) => {
    this.setState({weight: weight});
  };
  setAge = (age: string) => {
    this.setState({age: age});
  };
  setSex = (sex: string) => {
    this.setState({sex: sex});
  };

  calculate = () => {
    console.warn('ok');
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
            placeholder={strings.calories.height}
            value={this.state.height}
            onChangeHandle={(value: string) => this.setHeight(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.calories.weight}
            enableMultiline={true}
            numberOfLines={2}
            value={this.state.weight}
            onChangeHandle={(value: string) => this.setWeight(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
          />
          <Input
            placeholder={strings.calories.age}
            value={this.state.age}
            onChangeHandle={(value: string) => this.setAge(value)}
            errorType={'no'}
            hasErrors={this.hasErrors}
            keyboardType={'numeric'}
          />
          <FilledButton
            onPress={this.calculate}
            buttonText={strings.calories.calculate}
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
