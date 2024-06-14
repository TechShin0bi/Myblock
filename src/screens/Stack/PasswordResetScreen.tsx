import colors from '@utils/colors';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import Text from '@components/Text';

const PasswordResetScreen: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const toggleNewPasswordVisibility = () => {
    setHideNewPassword(!hideNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword);
  };

  const handleResetPassword = () => {
    // Handle password reset logic here
  };

  return (
    <View style={styles.container}>
      <Text  style={styles.title}>
        Reset Password
      </Text>
      <Input
        placeholder="New Password"
        secureTextEntry={hideNewPassword}
        onChangeText={setNewPassword}
        rightIcon={
          <Icon
            name={hideNewPassword ? 'eye-off' : 'eye'}
            type="feather"
            onPress={toggleNewPasswordVisibility}
          />
        }
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={hideConfirmPassword}
        onChangeText={setConfirmPassword}
        rightIcon={
          <Icon
            name={hideConfirmPassword ? 'eye-off' : 'eye'}
            type="feather"
            onPress={toggleConfirmPasswordVisibility}
          />
        }
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        buttonStyle={styles.button}
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
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    marginTop: 24,
    backgroundColor: colors.primary, // Customize button color as needed
  },
});

export default PasswordResetScreen;
