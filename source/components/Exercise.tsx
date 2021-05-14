import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../resources/colors';

interface Props {
  name: string;
  description: string;
}

export class Exercise extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.name}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    height: 70,
    borderRadius: 8,
    backgroundColor: colors.Secondary,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
});
