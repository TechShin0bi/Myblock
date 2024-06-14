import React, { ReactNode } from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

interface CustomTextProps extends RNTextProps {
  children: ReactNode;
}

const Text: React.FC<CustomTextProps> = ({ style, children, ...props }) => {
  return (
    <RNText style={[styles.defaultStyle, style]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'black',
  },
});

export default Text;
