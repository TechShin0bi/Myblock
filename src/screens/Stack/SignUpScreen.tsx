import { app_logo } from '@assets/index';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '@type/navigations';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Image, View } from 'react-native';
import { Button } from 'react-native-elements';

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigationProps['navigation']>();
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
          source={app_logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text  style={styles.title}>
        Sign Up
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={() => {}} />
      <Button
        title="Back to Sign In"
        type="clear"
        onPress={() => navigation.navigate('SignInScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 48, 
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default SignUpScreen;
