import {StackNavigationProp} from '@react-navigation/stack';
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { NavigatorParamList } from '../../resources/types';
import AddExercisePresenter, {AddExerciseInterface} from './AddExercisePresenter';

interface Props {
  presenter: AddExercisePresenter;
  navigation: StackNavigationProp<NavigatorParamList, 'AddExercise'>;
}

export default class AddExerciseScreen
  extends React.Component<Props>
  implements AddExerciseInterface {
    private readonly presenter: AddExercisePresenter;
    constructor(props: Props)
    {
      super(props);
      this.presenter = this.props.presenter;
    }
      render(){
        return(
          <Text>Hello</Text>
        )
      }
  }
