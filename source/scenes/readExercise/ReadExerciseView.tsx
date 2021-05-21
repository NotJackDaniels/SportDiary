import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {FilledButton} from '../../components/FilledButton';
import strings from '../../resources/strings';
import {NavigatorParamList} from '../../resources/types';
import ReadExerciseViewPresenter, {
  ReadExerciseInterface,
} from './ReadExerciseViewPresenter';

interface Exercise {
  name: string;
  repeatAmount: string;
  description: string;
  numberOfApproaches: string;
}

interface Props {
  presenter: ReadExerciseViewPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'readExercise'>;
  route: RouteProp<NavigatorParamList, 'readExercise'>;
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
    const item: Exercise = this.props.route?.params.item;
    return (
      <View style={styles.container}>
        <View style={styles.partInfo}>
          <Text style={[styles.labels]}>{strings.addExercise.name}</Text>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.partInfo}>
          <Text style={[styles.labels]}>{strings.addExercise.description}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.partInfo}>
          <Text style={[styles.labels]}>
            {strings.addExercise.numberOfApproaches}
          </Text>
          <Text>{item.numberOfApproaches}</Text>
        </View>
        <View style={styles.partInfo}>
          <Text style={[styles.labels]}>
            {strings.addExercise.repeatAmount}
          </Text>
          <Text>{item.repeatAmount}</Text>
        </View>
        <FilledButton
          onPress={() =>
            this.presenter.EditExercise(item, this.props.navigation)
          }
          buttonText={strings.readExercise.edit}
          Style={styles.filledButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  labels: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: '700',
  },
  partInfo: {},
  filledButton: {
    width: '100%',
  },
});
