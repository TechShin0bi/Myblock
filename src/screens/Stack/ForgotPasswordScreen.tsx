import { app_logo } from '@assets/index';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '@type/navigations';
import colors from '@utils/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Text from '@components/Text';
import { TextInput } from 'react-native';

const ForgotPasswordScreen = () => {
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
        Forgot Password
      </Text>
      <Text style={styles.instructions}>
        Enter your email address below to receive a link to reset your password.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Send Reset Link" onPress={() => {}} />
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
  instructions: {
    textAlign: 'center',
    marginBottom: 24,
    color: colors.gray,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    color: colors.black,
  },
});

export default ForgotPasswordScreen;
