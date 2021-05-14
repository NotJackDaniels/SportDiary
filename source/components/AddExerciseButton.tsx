import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Add from '../resources/images/plus.svg';
import {NavigatorParamList} from '../resources/types';

interface Props {
  onPress: () => void;
}

export class AddButton extends React.Component<Props> {
  render() {
    return (
      <TouchableOpacity
        style={{marginRight: 8}}
        onPress={() => this.props.onPress()} >
        <View>
          <Add height={24} width={24} />
        </View>
      </TouchableOpacity>
    );
  }
}
