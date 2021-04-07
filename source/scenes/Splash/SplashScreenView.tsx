/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import strings from '../../resources/strings';
import SplashScreenPresenter, {
    SplashScreenInterface,
  } from './SplashScreenPresenter';
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigatorParamList } from "../../resources/types";

interface SplashProps {
    presenter: SplashScreenPresenter;
    navigation: StackNavigationProp<NavigatorParamList, 'Splash'>;
}

export default class SplashScreenView extends React.Component<SplashProps> {
    private readonly presenter: SplashScreenPresenter;
    constructor(props: SplashProps)
    {
        super(props);
        this.presenter = this.props.presenter;
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('home');
        }, 2000);
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.Heading}>
                    {strings.splash.screenHeading}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Heading: {
        color: '#00fdff',
        fontSize: 40,
    }
})