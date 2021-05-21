/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../common/screens';
import Dependencies from '../services/Dependencies';
import HomeScreenView from '../scenes/home/HomeScreenView';
import HomeScreenPresenter from '../scenes/home/HomeScreenPresenter';
import SplashScreenPresenter from '../scenes/Splash/SplashScreenPresenter';
import SplashScreenView from '../scenes/Splash/SplashScreenView';
import strings from '../resources/strings';
import AddExercisePresenter from '../scenes/addExercise/AddExercisePresenter';
import AddExerciseScreen from '../scenes/addExercise/AddExerciseView';
import { AddButton } from '../components/AddExerciseButton';
import colors from '../resources/colors';
import ReadExerciseViewPresenter from '../scenes/readExercise/ReadExerciseViewPresenter';
import ReadExerciseView from '../scenes/readExercise/ReadExerciseView';

const Stack = createStackNavigator();

export default class MainNavigator extends React.Component {
  private readonly dependencies = Dependencies.createDefault();

  private createSplashScreen = (props: any): React.ReactNode => {
    let presenter = new SplashScreenPresenter(this.dependencies);
    return <SplashScreenView presenter={presenter} {...props} />;
  };

  private createHomeScreen = (props: any): React.ReactNode => {
    let presenter = new HomeScreenPresenter(this.dependencies);
    return <HomeScreenView presenter={presenter} {...props} />;
  };

  private createAddExerciseScreen = (props: any): React.ReactNode => {
    let presenter = new AddExercisePresenter(this.dependencies);
    return <AddExerciseScreen presenter={presenter} {...props} />;
  };

  private createReadExerciseScreen = (props: any): React.ReactNode => {
    let presenter = new ReadExerciseViewPresenter(this.dependencies);
    return <ReadExerciseView presenter={presenter} {...props} />;
  };

  private createAddButton = () : React.ReactNode => {
    return <AddButton onPress={() => (console.warn('clicked'))}/>;
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screens.splash}
            options={{
              title: strings.splash.screenTitle,
              headerShown: false,
            }}>
            {props => this.createSplashScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.home}
            options= {{headerTitle: strings.home.screenTitle,
            }}>
            {props => this.createHomeScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.addExercise}
            options={{
              headerTitle: strings.addExercise.header,
              headerStyle: {
                backgroundColor: colors.Accent,
              },
            }}>
            {props => this.createAddExerciseScreen(props)}
          </Stack.Screen>
          <Stack.Screen
            name={screens.readExercise}
            options={{
              headerTitle: strings.readExercise.header,
              headerStyle: {
                backgroundColor: colors.Accent,
              },
            }}>
            {props => this.createReadExerciseScreen(props)}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
