import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import strings from '../../resources/strings';
import ReadExerciseViewPresenter, {
  ReadExerciseInterface,
} from './ReadExerciseViewPresenter';

interface Props {
  presenter: ReadExerciseViewPresenter;
  name: string;
}

export default class ReadExerciseView
  extends React.Component<Props>
  implements ReadExerciseInterface {
  private readonly presenter: ReadExerciseViewPresenter;
  constructor(props: Props) {
    super(props);
    this.presenter = this.props.presenter;
    this.presenter.view = this;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.labels]}>{strings.addExercise.name}</Text>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labels: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
  },
});
