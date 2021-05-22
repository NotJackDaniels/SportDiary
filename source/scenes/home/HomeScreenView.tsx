import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, RefreshControl, Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {AddButton} from '../../components/AddExerciseButton';
import {Exercise} from '../../components/Exercise';
import {NavigatorParamList} from '../../resources/types';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';
import Swipeout from 'react-native-swipeout';

interface Props {
  presenter: HomeScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'home'>;
}

interface State {
  exercises: any;
  refreshing: boolean;
}

interface IExercise {
  name: string;
  repeatAmount: string;
  description: string;
  numberOfApproaches: string;
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
      refreshing: false,
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
    let swipeBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => this.presenter.deleteExercise(item),
      },
    ];
    return (
      <Swipeout
        right={swipeBtns}
        autoClose={true}
        backgroundColor="transparent">
        <TouchableOpacity
          onPress={() =>
            this.presenter.didPressReadExerciseButton(
              item,
              this.props.navigation,
            )
          }>
          <Exercise name={item.name} description={item.description} />
        </TouchableOpacity>
      </Swipeout>
    );
  }

  _onRefresh = async () => {
    this.setState({refreshing: true});
    await this.presenter.getExercises();
    this.setState({refreshing: false});
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          {this.state.exercises ? (
            <FlatList
              data={this.state.exercises}
              renderItem={item => this.renderItem(item)}
              keyExtractor={(item, index) => `item-${index}`}
              refreshControl={
                <RefreshControl
                  onRefresh={this._onRefresh}
                  refreshing={this.state.refreshing}
                />
              }
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
