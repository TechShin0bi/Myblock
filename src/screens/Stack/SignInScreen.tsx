import { app_logo } from '@assets/index';
import Text from '@components/Text';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProps } from '@type/navigations';
import colors from '@utils/colors';
import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const SignInScreen = () => {
  const navigation = useNavigation<StackNavigationProps['navigation']>();
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

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
        Sign In
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Icon
            name={hidePassword ? 'eye-off' : 'eye'}
            type="feather"
            size={24}
            color={colors.gray}
          />
        </TouchableOpacity>
      </View>
      <Button title="Sign In" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.signUp}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
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
    color: colors.black,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: colors.black,
  },
  eyeIconContainer: {
    padding: 12,
  },
  forgotPassword: {
    color: colors.gray,
    textAlign: 'center',
    marginTop: 16,
  },
  signUp: {
    color: colors.gray,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default SignInScreen;
