/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text} from 'react-native';
import HomeScreenPresenter, {
  HomeScreenViewInterface,
} from './HomeScreenPresenter';

interface Props {
  presenter: HomeScreenPresenter;
}

interface State {

}

export default class HomeScreenView
  extends React.Component<Props, State>
  implements HomeScreenViewInterface {
  private readonly presenter: HomeScreenPresenter;

  constructor(props: Props) {
    super(props);

    this.presenter = this.props.presenter;
    this.presenter.view = this;

  }



  render() {
    return (
      <>
        <Text>home</Text>
      </>
    );
  }
}
