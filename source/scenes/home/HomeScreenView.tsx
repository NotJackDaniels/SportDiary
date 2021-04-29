import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {AddButton} from '../../components/AddExerciseButton';
import {NavigatorParamList} from '../../resources/types';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';

interface Props {
  presenter: HomeScreenPresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'home'>;
}

interface State {}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;

  constructor(props: Props) {
    super(props);

    this.presenter = this.props.presenter;
    this.presenter.view = this;
    this.navOpt();
  }

  navOpt = () => {
    console.warn('ok!');
    this.props.navigation.setOptions({
      headerRight: () => (
        <AddButton
          onPress={() => this.props.navigation.navigate('addExercise')}
        />
      ),
    });
  };

  render() {
    return (
      <>
        <Text>home</Text>
      </>
    );
  }
}
