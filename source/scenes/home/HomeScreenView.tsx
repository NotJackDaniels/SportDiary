import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {AddButton} from '../../components/AddExerciseButton';
import {Exercise} from '../../components/Exercise';
import {NavigatorParamList} from '../../resources/types';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';

interface Props {
  presenter: HomeScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'home'>;
}

interface State {
  exercises: any;
}

interface IExercise {
  name: string;
  description: string;
}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;

  constructor(props: Props) {
    super(props);

    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.navOpt();
    this.state = {
      exercises: '',
    };
  }

  componentDidMount() {
    this.presenter.getExercises();
  }

  setExercises(exercises: any) {
    console.warn(exercises, 228);
    this.setState({exercises: JSON.parse(exercises)});
  }

  navOpt = () => {
    this.props.navigation.setOptions({
      headerRight: () => (
        <AddButton
          onPress={() => this.props.navigation.navigate('addExercise')}
        />
      ),
    });
  };

  renderItem({item}: {item: IExercise}) {
    return <Exercise name={item.name} description={item.description} />;
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          {this.state.exercises ? (
            <FlatList
              data={this.state.exercises}
              renderItem={item => this.renderItem(item)}
              keyExtractor={(item, index) => `item-${index}`}
            />
          ) : (
            <Text>{this.state.exercises.length}</Text>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
