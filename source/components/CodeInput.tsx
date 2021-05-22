import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import colors from '../resources/colors';

interface Props {
  placeholder: string;
  value: string;
  numberOfLines?: number;
  onChangeHandle: (value: string) => void;
  marginBottom?: number;
  borderColor: string;
}

interface State {
  newValue: string;
}

export class CodeInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      newValue: '',
    };
  }

  render() {
    return (
      <>
        <TextInput
          placeholderTextColor={colors.Shade}
          value={this.props.value}
          placeholder={this.props.placeholder}
          textAlign={'center'}
          onChangeText={value => this.props.onChangeHandle(value)}
          keyboardType={'number-pad'}
          style={[styles.textInput, {borderColor: this.props.borderColor}]}
          numberOfLines={this.props.numberOfLines}
          maxLength={6}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 16,
    fontWeight: '700',
    borderRadius: 8,
    height: 64,
    fontSize: 40,
    borderWidth: 2,
    fontFamily: 'Raleway-Bold',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    lineHeight: 48,
    fontVariant: ['lining-nums'],
  },
});
