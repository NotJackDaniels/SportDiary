import React from 'react';
import SplashScreenPresenter, {
    SplashScreenInterface,
  } from './SplashScreenPresenter';

interface Props {
presenter: SplashScreenPresenter;
}

export default class SplashScreenView extends React.Component<Props> {
    private readonly presenter: SplashScreenPresenter;
    constructor(props: Props)
    {
        super(props);
        this.presenter = this.props.presenter;
    }
    render() {
        return(<></>)
    }
}